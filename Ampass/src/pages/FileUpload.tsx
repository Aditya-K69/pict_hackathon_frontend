import React, { useState, useCallback } from 'react';

interface OCRResult {
  text: string;
  confidence: number;
  box: number[][];
}

interface OCRResponse {
  success: boolean;
  data: OCRResult[];
  outputImage: string | null;
  totalTextBlocks: number;
  message: string;
  error?: string;
}

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<OCRResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const API_BASE_URL = 'http://localhost:3001';

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    setSelectedFile(file);
    setError(null);
    setResult(null);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch(`${API_BASE_URL}/api/ocr`, {
        method: 'POST',
        body: formData,
        // Note: DO NOT set Content-Type header manually
        // Browser automatically sets multipart/form-data with boundary
      });

      const data: OCRResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  const handleCopyText = () => {
    if (result?.data) {
      const text = result.data.map(item => item.text).join('\n');
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard!');
      });
    }
  };

  const handleDownloadText = () => {
    if (result?.data) {
      const text = result.data.map(item => item.text).join('\n');
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ocr_result.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🔍 OCR Image Processor</h1>
        <p style={styles.subtitle}>Upload an image to extract text using PaddleOCR</p>
      </div>

      <div style={styles.content}>
        {/* Upload Section */}
        <div style={styles.uploadSection}>
          <div
            style={{
              ...styles.uploadArea,
              ...(dragActive ? styles.uploadAreaDragActive : {}),
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <div style={styles.uploadIcon}>📁</div>
            <div style={styles.uploadText}>
              {selectedFile ? selectedFile.name : 'Click or drag image here'}
            </div>
            <div style={styles.uploadSubtext}>
              Supports: PNG, JPG, JPEG, GIF, BMP, WEBP
            </div>
          </div>

          {previewUrl && (
            <div style={styles.previewContainer}>
              <h3 style={styles.sectionTitle}>Preview:</h3>
              <img src={previewUrl} alt="Preview" style={styles.previewImage} />
            </div>
          )}

          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                ...((!selectedFile || loading) ? styles.btnDisabled : {}),
              }}
              onClick={handleUpload}
              disabled={!selectedFile || loading}
            >
              {loading ? '⏳ Processing...' : '🚀 Process OCR'}
            </button>
            {selectedFile && (
              <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={handleReset}>
                🔄 Reset
              </button>
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div style={styles.alertError}>
            <strong>❌ Error:</strong> {error}
          </div>
        )}

        {/* Results Section */}
        {result && result.success && (
          <div style={styles.resultsSection}>
            <div style={styles.resultsHeader}>
              <h2 style={styles.resultsTitle}>✅ OCR Results</h2>
              <span style={styles.badge}>{result.totalTextBlocks} text blocks found</span>
            </div>

            {/* Output Image */}
            {result.outputImage && (
              <div style={styles.outputImageContainer}>
                <h3 style={styles.sectionTitle}>Processed Image:</h3>
                <img
                  src={`${API_BASE_URL}${result.outputImage}`}
                  alt="OCR Output"
                  style={styles.outputImage}
                />
              </div>
            )}

            {/* Extracted Text */}
            <div style={styles.extractedText}>
              <h3 style={styles.sectionTitle}>Extracted Text:</h3>
              <div style={styles.textBlocks}>
                {result.data.map((item, index) => (
                  <div key={index} style={styles.textBlock}>
                    <div style={styles.textBlockHeader}>
                      <span style={styles.blockNumber}>Block {index + 1}</span>
                      <span style={styles.confidence}>
                        {(item.confidence * 100).toFixed(1)}% confidence
                      </span>
                    </div>
                    <div style={styles.textContent}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Text Output */}
            <div style={styles.fullText}>
              <div style={styles.fullTextHeader}>
                <h3 style={styles.sectionTitle}>Complete Text:</h3>
                <div style={styles.textActions}>
                  <button
                    style={{ ...styles.btn, ...styles.btnSmall }}
                    onClick={handleCopyText}
                  >
                    📋 Copy
                  </button>
                  <button
                    style={{ ...styles.btn, ...styles.btnSmall }}
                    onClick={handleDownloadText}
                  >
                    💾 Download
                  </button>
                </div>
              </div>
              <textarea
                style={styles.textOutput}
                value={result.data.map(item => item.text).join('\n')}
                readOnly
                rows={10}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    color: 'white',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
  },
  title: {
    fontSize: '2.5em',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '1.1em',
    opacity: 0.9,
    margin: 0,
  },
  content: {
    background: 'white',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  },
  uploadSection: {
    marginBottom: '30px',
  },
  uploadArea: {
    border: '3px dashed #667eea',
    borderRadius: '15px',
    padding: '60px 30px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: '#f8f9ff',
  },
  uploadAreaDragActive: {
    borderColor: '#764ba2',
    background: '#e8e9ff',
    transform: 'scale(1.02)',
    boxShadow: '0 5px 20px rgba(102, 126, 234, 0.2)',
  },
  uploadIcon: {
    fontSize: '4em',
    marginBottom: '15px',
  },
  uploadText: {
    fontSize: '1.2em',
    color: '#333',
    marginBottom: '8px',
    fontWeight: 600,
  },
  uploadSubtext: {
    color: '#777',
    fontSize: '0.9em',
  },
  previewContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '30px',
  },
  btn: {
    padding: '15px 40px',
    fontSize: '1.1em',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  btnSecondary: {
    background: '#f5f5f5',
    color: '#333',
  },
  btnSmall: {
    padding: '8px 20px',
    fontSize: '0.9em',
    background: '#667eea',
    color: 'white',
  },
  btnDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  alertError: {
    padding: '15px 20px',
    borderRadius: '10px',
    margin: '20px 0',
    background: '#fee',
    borderLeft: '4px solid #f44',
    color: '#c33',
  },
  resultsSection: {
    marginTop: '40px',
  },
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '2px solid #eee',
  },
  resultsTitle: {
    color: '#333',
    margin: 0,
  },
  badge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '0.9em',
    fontWeight: 600,
  },
  outputImageContainer: {
    margin: '30px 0',
  },
  outputImage: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  },
  extractedText: {
    margin: '30px 0',
  },
  sectionTitle: {
    color: '#333',
    marginBottom: '15px',
  },
  textBlocks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  textBlock: {
    background: '#f8f9ff',
    borderLeft: '4px solid #667eea',
    padding: '15px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  textBlockHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  blockNumber: {
    fontWeight: 600,
    color: '#667eea',
    fontSize: '0.9em',
  },
  confidence: {
    background: '#e8e9ff',
    color: '#667eea',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.85em',
    fontWeight: 600,
  },
  textContent: {
    color: '#333',
    lineHeight: 1.6,
    fontSize: '1.05em',
  },
  fullText: {
    margin: '30px 0',
  },
  fullTextHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  textActions: {
    display: 'flex',
    gap: '10px',
  },
  textOutput: {
    width: '100%',
    padding: '15px',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontFamily: "'Courier New', monospace",
    fontSize: '1em',
    resize: 'vertical' as const,
  },
};

export default FileUpload;