import jsPDF from 'jspdf';

interface ClaimData {
  id: string;
  status: string;
  incidentDate: string;
  submittedDate: string;
  type: string;
  amount: number;
  policyNumber: string;
  vehicle: string;
  location: string;
  description: string;
}

export const generateClaimAcknowledgmentPDF = (claimData: ClaimData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Header
  doc.setFillColor(31, 99, 234); // Blue color
  doc.rect(0, 0, pageWidth, 30, 'F');

  // Logo/Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('ClaimIt', 20, 18);

  // Reset text color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);

  yPosition = 45;

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('CLAIM ACKNOWLEDGMENT RECEIPT', 20, yPosition);

  yPosition += 15;

  // Claim Reference Box
  doc.setDrawColor(31, 99, 234);
  doc.setLineWidth(2);
  doc.rect(20, yPosition - 5, pageWidth - 40, 25);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(`Claim Reference: ${claimData.id}`, 25, yPosition + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Status: ${claimData.status.charAt(0).toUpperCase() + claimData.status.slice(1).replace('-', ' ')}`, 25, yPosition + 12);
  doc.text(`Date of Acknowledgment: ${new Date().toLocaleDateString()}`, 25, yPosition + 19);

  yPosition += 35;

  // Dear Customer
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Dear Valued Customer,', 20, yPosition);

  yPosition += 10;

  // Acknowledgment text
  const acknowledgmentText = `We are pleased to acknowledge that we have received your claim submission. Your claim has been registered in our system and assigned a unique reference number for tracking purposes.`;
  const wrappedText = doc.splitTextToSize(acknowledgmentText, pageWidth - 40);
  doc.setFontSize(10);
  doc.text(wrappedText, 20, yPosition);

  yPosition += wrappedText.length * 5 + 10;

  // Claim Details Section
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('CLAIM DETAILS', 20, yPosition);

  yPosition += 8;

  // Details in a table-like format
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const details = [
    { label: 'Claim ID', value: claimData.id },
    { label: 'Policy Number', value: claimData.policyNumber },
    { label: 'Incident Type', value: claimData.type },
    { label: 'Incident Date', value: claimData.incidentDate },
    { label: 'Claim Submission Date', value: claimData.submittedDate },
    { label: 'Claim Amount', value: `₹${claimData.amount.toFixed(2)}` },
    { label: 'Vehicle', value: claimData.vehicle },
    { label: 'Location of Incident', value: claimData.location },
  ];

  details.forEach((detail) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${detail.label}:`, 25, yPosition);
    doc.setFont('helvetica', 'normal');
    const valueText = doc.splitTextToSize(detail.value, pageWidth - 100);
    doc.text(valueText, 95, yPosition);
    yPosition += 7;
  });

  yPosition += 5;

  // Next Steps Section
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('NEXT STEPS', 20, yPosition);

  yPosition += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const steps = [
    'Our claims adjuster will review your submission within 2-3 business days.',
    'You will receive updates on the progress of your claim via email and SMS.',
    'If additional information is needed, we will contact you directly.',
    'You can track your claim status anytime using your claim ID on our portal.',
  ];

  steps.forEach((step, index) => {
    const wrapped = doc.splitTextToSize(`${index + 1}. ${step}`, pageWidth - 40);
    doc.text(wrapped, 25, yPosition);
    yPosition += wrapped.length * 5 + 3;
  });

  yPosition += 5;

  // Important Notes
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('IMPORTANT NOTES', 20, yPosition);

  yPosition += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  const notes = [
    '• Please retain this acknowledgment receipt for your records.',
    '• Use your claim ID for all future communications regarding this claim.',
    '• Ensure that all submitted documents are original or certified copies.',
    '• Keep supporting documents safe until the claim is fully resolved.',
  ];

  notes.forEach((note) => {
    doc.text(note, 25, yPosition);
    yPosition += 5;
  });

  // Footer
  const footerY = pageHeight - 30;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, footerY, pageWidth - 20, footerY);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('ClaimIt - Insurance Claim Management Platform', pageWidth / 2, footerY + 8, { align: 'center' });
  doc.text('Support: support@claimit.com | Phone: 1800-CLAIMIT', pageWidth / 2, footerY + 14, { align: 'center' });
  doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth / 2, footerY + 20, { align: 'center' });

  // Save/Download the PDF
  doc.save(`Claim_Acknowledgment_${claimData.id}.pdf`);
};
