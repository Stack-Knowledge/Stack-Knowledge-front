const color = {
  primary: '#FFA927',
  gray: {
    '010': '#F7F9FB',
    '020': '#EBEBEB',
    '030': '#D9D9D9',
    '040': '#D9D9D9',
    '050': '#6C6C6C',
    '060': '#686868',
    '070': '#333333',
  },
  white: '#FFFFFF',
  black: '#000000',
  banner1: '#F4CCBA',
  banner2:
    'linear-gradient(93deg, #8F9BFF 0.28%, #A3B7FF 48.06%, #F6F7FF 100%)',
  banner3: '#FFBE71',
} as const;

const typo = {
  h1: {
    fontSize: '2.5rem',
    lineHeight: '3rem',
  },
  h2: {
    fontSize: '2rem',
    lineHeight: '2.375rem',
  },
  h3: {
    fontSize: '1.75rem',
    lineHeight: '2.0625rem',
  },
  h4: {
    fontSize: '1.5rem',
    lineHeight: '1.8125rem',
  },
  h5: {
    fontSize: '1.375rem',
    lineHeight: '1.625rem',
  },
  title: {
    fontSize: '3.125rem',
    lineHeight: '3.75rem',
  },
  button: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: '1.3125rem',
  },
  body2: {
    fontSize: '1rem',
    lineHeight: '1.1875rem',
  },
  body3: {
    fontSize: '0.875rem',
    lineHeight: '1.0625rem',
  },
} as const;

const breakPoint = {
  600: '(max-width: 600px)',
  1024: '(max-width: 1024px)',
  1440: '(max-width: 1440px)',
  1728: '(max-width: 1728px)',
  1920: '(max-width: 1920px)',
} as const;

export const theme = {
  color,
  typo,
  breakPoint,
} as const;
