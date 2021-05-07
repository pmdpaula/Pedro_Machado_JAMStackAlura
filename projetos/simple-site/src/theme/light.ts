import { breakpoints, defaultStyles } from './index';
import typographyVariants from './typographyVariants';

export const colors: colorsProps = {
  background: {
    main: {
      color: '#cfd8dc',
    },
    auxiliary: {
      color: '#eceff1',
    },
  },
  text: {
    head1: {
      color: '#000a12',
    },
    head2: {
      color: '#263238',
    },
    main: {
      color: '#29434E',
    },
    link: {
      color: '#cfd8dc',
    },
    black: {
      color: '#000',
    },
    white: {
      color: '#fff',
    },
  },
  borders: {
    main: {
      color: '#ffad42',
    },
  },
  primary: {
    main: {
      color: '#546E7A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#F57C00',
      contrastText: '#29434E',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
  },
};

export type colorsProps = {
  background: {
    main: {
      color: string;
    },
    auxiliary: {
      color: string;
    },
  },
  text: {
    head1: {
      color: string;
    },
    head2: {
      color: string;
    },
    main: {
      color: string;
    },
    link: {
      color: string;
    },
    black: {
      color: string;
    },
    white: {
      color: string;
    },

  },
  borders: {
    main: {
      color: string;
    },
  },
  primary: {
    main: {
      color: string;
      contrastText: string;
    },
  },
  secondary: {
    main: {
      color: string;
      contrastText: string;
    },
  },
  tertiary: {
    main: {
      color: string;
      contrastText: string;
    },
  },
}

export default {
  title: 'light',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles,
};
