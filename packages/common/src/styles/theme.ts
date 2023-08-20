const color = {
  primary: "#FFA927",
  gray: {
    "010": "#F7F9FB",
    "020": "#EBEBEB",
    "030": "#D9D9D9",
    "040": "#D9D9D9",
    "050": "#6C6C6C",
    "060": "#686868",
    "070": "#333333",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

const typo = {
  h1: {
    fontSize: "40px",
    lineHeight: "48px",
  },
  h2: {
    fontSize: "32px",
    lineHeight: "38px",
  },
  h3: {
    fontSize: "248px",
    lineHeight: "33px",
  },
  h4: {
    fontSize: "24px",
    lineHeight: "29px",
  },
  h5: {
    fontSize: "22px",
    lineHeight: "26px",
  },
  title: {
    fontSize: "50px",
    lineHeight: "60px",
  },
  button: {
    fontSize: "20px",
    lineHeight: "24px",
  },
  body1: {
    fontSize: "18px",
    lineHeight: "21px",
  },
  body2: {
    fontSize: "16px",
    lineHeight: "19px",
  },
  body3: {
    fontSize: "14px",
    lineHeight: "17px",
  },
} as const;

const breakPoint = {
  600: "(max-width: 600px)",
  1024: "(max-width: 1024px)",
  1440: "(max-width: 1440px)",
  1728: "(max-width: 1728px)",
  1920: "(max-width: 1920px)",
} as const;

export const theme = {
  color,
  typo,
  breakPoint,
} as const;
