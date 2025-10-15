import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfAttachment = async (docName: string) => {
  const body = document.body;
  const html = document.documentElement;

  // Calculate the full height of the page content
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  // Temporarily set the body height to the full content height
  document.body.style.height = `${height}px`;

  // Generate a canvas from the HTML content
  const canvas = await html2canvas(document.body);
  const imgData = canvas.toDataURL('image/png');

  // Calculate PDF dimensions (convert pixels to millimeters)
  const mmPerInch = 25.4;
  const widthInMm = canvas.width * 25.4 / 96; // 96 DPI
  const heightInMm = canvas.height * 25.4 / 96;

  const doc = new jsPDF('p', 'mm', [widthInMm, heightInMm]);

  // Add the image to the PDF
  doc.addImage(imgData, 'PNG', 0, 0, widthInMm, heightInMm);

  // Generate the PDF as a Blob
  const pdfBlob = doc.output('blob');

  // Reset the body height
  document.body.style.height = '0px';

  return pdfBlob;
};
