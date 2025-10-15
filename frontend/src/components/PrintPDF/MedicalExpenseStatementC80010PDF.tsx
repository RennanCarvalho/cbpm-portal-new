import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TableCell, TDocumentDefinitions } from 'pdfmake/interfaces';
import { formatMoney } from '../../utils/formatMoney';
import { ImagesBase64 } from './ImagesBase64';

export async function MedicalExpenseStatementC80010PDF(
  extract: any,
  initialDate: any,
  finalDate: any,
) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const todayDate = new Date().toLocaleString();

  const imagesBase64 = ImagesBase64();

  pdfMake.fonts = {
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf',
    },
  };

  const columnsTitle: TableCell[] = [
    { text: 'ATENDIMENTO', style: 'columnsTitle' },
    { text: 'FATURA', style: 'columnsTitle' },
    { text: 'NOME PACIENTE', style: 'columnsTitle' },
    { text: 'DESCRIÇÃO DO PROCEDIMENTO', style: 'columnsTitle' },
    { text: 'QUANTIDADE', style: 'columnsTitle' },
    { text: 'VALOR', style: 'columnsTitle' },
    { text: 'RESSARCIMENTO', style: 'columnsTitle' },
  ];

  const extractBody: any = [];

  for await (let data of extract.data) {
    let rows: any[] = [];
    const splitDate = data.DataAtendimento.split('-').slice(0, 3).reverse();
    const formatedDate = splitDate[0]
      .slice(0, 2)
      .concat(`/${splitDate[1]}/${splitDate[2]}`);

    rows.push({ text: formatedDate, style: 'textBody' });
    rows.push({ text: data.Fatura, style: 'textBody' });
    rows.push({ text: data.NomePac, style: 'textBody' });
    rows.push({ text: data.Procedimento, style: 'textBody' });
    rows.push({ text: data.Quantidade, style: 'textBody' });
    rows.push({ text: `${formatMoney(data.Ressarcim)}`, style: 'textBody' });
    rows.push({ text: `${formatMoney(data.Valor)}`, style: 'textBody' });

    extractBody.push(rows);
  }

  const extractTitle = 'Demonstrativo de Despesas Médicas da Cruz Azul C800';

  const body: any = [];
  const columnsBody: any = [];

  columnsTitle.forEach(column => columnsBody.push(column));
  body.push(columnsBody);

  extractBody.forEach((data: any) => {
    body.push(data);
  });

  const header = [
    { text: 'GOVERNO DO ESTADO DE SÃO PAULO\n\n', style: 'header' },
    { text: 'SECRETARIA DE SEGURANÇA PÚBLICA\n\n', style: 'header' },
    {
      text: 'CAIXA BENEFICENTE DA POLÍCIA MILITAR DO ESTADO\n\n',
      style: 'subHeader',
    },
    { text: 'PORTAL CBPM\n\n', style: 'subHeader' },
    { text: `${extractTitle}\n\n`, style: 'title' },
    { text: `Período de ${initialDate} até ${finalDate}\n\n`, style: 'title' },
    {
      text: `CONTRIBUINTE: ${extract.re ? extract.re : extract.matricula}   ${
        extract.name
      }   POSTO: ${extract.posto}\n\n`,
      style: 'contribuinte',
    },
  ];

  const footerData = `Extraído no Portal de Serviços CBPM (cbpm.sp.gov.br) por meio de login e senha de ${extract.name}, contribuinte ativo no sistema AMH da CBPM
  Processado em ${todayDate} 
  Rua Alfredo Maia, 218 - Luz - São Paulo - SP - CEP: 01106-010 - Fone: (11) 3315- 3075  Copyright © 2022 - Caixa Beneficiente da Polícia Militar
  `;

  const docDefinitions: TDocumentDefinitions = {
    pageOrientation: 'landscape',
    watermark: {
      text: 'CBPM - Documento para simples conferência',
      color: 'black',
      fontSize: 33,
      opacity: 0.3,
      bold: true,
      italics: false,
    },

    footer: function (currentPage, pageCount) {
      return [
        {
          text: currentPage.toString() + ' de ' + pageCount,
          style: 'pageNumber',
        },
        { text: footerData, style: 'textFooter' },
      ];
    },

    content: [
      {
        columns: [
          { image: imagesBase64.sp, width: 70, height: 70 },
          {
            text: [...header],
            alignment: 'center',
          },
          { image: imagesBase64.cbpm, width: 70, height: 70 },
        ],
      },
      {
        alignment: 'center',
        table: {
          headerRows: 1,
          widths: ['10%', '10%', '20%', '25%', '14%', '11%', '10%'],
          body: body,
        },
      },
    ],
    defaultStyle: {
      font: 'Roboto',
    },
    styles: {
      header: {
        fontSize: 12,
        bold: true,
        margin: [0, 0, 5, 0],
      },
      subHeader: {
        fontSize: 12,
        bold: true,
        margin: [10, 0, 10, 0],
      },
      title: {
        fontSize: 10,
        bold: true,
      },
      columnsTitle: {
        fontSize: 8,
        alignment: 'center',
        bold: true,
        fillColor: '#42ABEF',
        margin: 2,
      },
      textBody: {
        fontSize: 8,
        alignment: 'center',
      },
      pageNumber: {
        fontSize: 10,
      },
      textFooter: {
        fontSize: 8,
        alignment: 'center',
      },
      contribuinte: {
        decoration: 'underline',
        bold: true,
      },
    },
  };

  const win = window.open('', '_blank');
  pdfMake.createPdf(docDefinitions).open({}, win);
}
