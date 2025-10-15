import { useEffect } from 'react';
declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
  }
}

export const VLibras = () => {
  useEffect(() => {
    const vLibras = document.createElement('script');
    const barraAcessibilidade = document.createElement('script');

    vLibras.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    barraAcessibilidade.src ='https://comunicacao.sp.gov.br/statics/js/script-acessibilidade.js';

    vLibras.async = true;
    barraAcessibilidade.async = true;


    vLibras.onload = () => {
      if (window.VLibras?.Widget) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      } else {
        console.error('VLibras Widget initialization failed.');
      }
    };

    document.body.appendChild(vLibras);
    document.body.appendChild(barraAcessibilidade);


    return () => {
      if (vLibras.parentNode) {
        vLibras.parentNode.removeChild(vLibras);
      }
      if (barraAcessibilidade.parentNode) {
        barraAcessibilidade.parentNode.removeChild(barraAcessibilidade);
      }
    };
  }, []);

  const rawHTML = `
  <style>
    .inversed {
      background: black;
      filter: invert(100%);
    }
    .contrast {
      background: black !important;
    }
      
    .contrast * {
      border-color: white !important;
      color: white !important;
      background-color: black;
    }
  </style>
    
  <div style="position: fixed; display: flex; flex-direction: column; text-align: -webkit-right; gap: 5px; right: 10px; top: 50vh">
  <div vw class="enabled">
      <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>
    <button style="margin-top: 30px;" role="button" class="govsp-acessibilidade" id="aumentaFonte" accesskey="2" title="Aumentar Fonte" aria-label="Aumentar Fonte">
      <img class="govsp-acessibilidade" src="https://saopaulo.sp.gov.br/barra-govsp/img/i-big-font.png" alt="Aumentar Fonte" />
    </button>
    <button role="button" class="govsp-acessibilidade" id="reduzFonte" accesskey="3" title="Diminuir Fonte" aria-label="Diminuir Fonte">
      <img class="govsp-acessibilidade" src="https://saopaulo.sp.gov.br/barra-govsp/img/i-small-font.png" alt="Diminuir Fonte" />
    </button>
    <button role="button" class="govsp-acessibilidade" id="altocontraste" accesskey="4" title="Aplicar contraste" aria-label="Aplicar contraste">
      <img class="govsp-acessibilidade" src="https://saopaulo.sp.gov.br/barra-govsp/img/i-contrast.png" alt="Aplicar contraste" />
    </button>


  </div>
`;

  return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />;
};
