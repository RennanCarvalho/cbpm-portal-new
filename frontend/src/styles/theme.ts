import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'blue.default',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  colors: {
    gray: {
      default: '#EDEDED',
      '50': '#F7FAFC',
      '100': '#EDF2F7',
      '200': '#E2E8F0',
      '300': '#CBD5E0',
      '500': '#C0C0C0',
      '600': '#4A5568',
    },
    white: {
      default: '#FFF',
    },
    black: {
      default: '#000',
    },
    blue: {
      default: '#1048A0',
      '500': '#3182ce',
      crystal: '#0b7be4',
      clear: '#c2e0fb',
    },
    green: {
      default: '#83e0ab',
      new: '#00b741',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'white.default',
        color: 'black.default',
      },

      'button, a, textarea': {
        cursor: 'pointer',
      },

      'button:hover, a:hover, input:hover, textarea:hover, button:focus, a:focus, input:focus, textarea:focus':
        {
          boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
        },
      'a:has(img)': {
        border: 'none !important',
        boxShadow: 'none !important',
      },
    },
  },
});
