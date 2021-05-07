interface breakpointsProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface defaultStylesProps {
  borderRadius: string;
  transition: string;
  fontFamily: string;
  boxShadow: string;
  contentWidth: string;
}

export const breakpoints: breakpointsProps = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const defaultStyles: defaultStylesProps = {
  borderRadius: '6px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  contentWidth: '1600px',
};
