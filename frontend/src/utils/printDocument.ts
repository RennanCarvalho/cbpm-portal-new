import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const printDocument = () => {
  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  document.body.style.height = `${height}px`;

  html2canvas(document.body).then(function (canvas) {
    const imgData = canvas.toDataURL('image/pdf');
    const doc = new jsPDF('p', 'mm', [canvas.width, canvas.height - 200], true);
    doc.addImage(imgData, 'PDF', 10, 10, canvas.width, canvas.height);

    window.open(URL.createObjectURL(doc.output('blob')));
  });

  document.body.style.height = '0px';
};
