import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      open_sans: ["Open Sans", "sans-serif"],
      monserrat: ["Montserrat", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      aleo: ["Aleo", "sans-serif"],
      anton: ["Anton", "sans-serif"],
      libre_baskerville: ["Libre Baskerville", "serif"],
      abril_fatface: ["Abril Fatface", "serif"],
      alfa_slab_one: ["Alfa Slab One", "serif"],
    },
    fontSize: {
      base: "16px",
      xs: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      md: ["20px", { lineHeight: "30px" }],
      lg: [
        "24px",
        {
          fontWeight: "700",
          lineHeight: "32px",
        },
      ],
      xsl: [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "22px",
        },
      ],
      xl: [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "24px",
        },
      ],
      "2xl": [
        "30px",
        {
          fontWeight: "400",
          lineHeight: "45px",
        },
      ],
      "5xl": [
        "40px",
        {
          fontWeight: "700",
          lineHeight: "50px",
        },
      ],
      "6xl": [
        "58px",
        {
          fontWeight: "700",
          lineHeight: "80px",
        },
      ],
      "8xl": [
        "90px",
        {
          fontWeight: "700",
          lineHeight: "90px",
        },
      ],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#23A6F0",
        secondary_1: "#23856D",
        secondary_2: "#3C403D",
        dark_background: "#252B42",
        light_background: "#FFFFFF",
        success: "#2DC071",
        alert: "#E77C40",
        danger: "#E74040",
        hover: "#2A7CC7",
        disable: "#8EC2F2",
        muted: "#BDBDBD",
        light_gray_1: "#FAFAFA",
        light_gray_2: "#ECECEC",
        primary_text: "#23A6F0",
        secondary_text_1: "#40BB15",
        secondary_text_2: "#3C403D",
        text_color: "#252B42",
        second_text_color: "#737373",
        light: "#FFFFFF",
        sucess_text: "#2DC071",
        alert_text: "#E77C40",
        danger_text: "#E74040",
        hover_text: "#2A7CC7",
        disable_text: "#8EC2F2",
        muted_text: "#BDBDBD",
        light_gray_1_text: "#FAFAFA",
        light_gray_2_text: "#ECECEC",
        faded_primary: "#B2E3FF",
        faded_secondary_1: "#B9EAA8",
        faded_secondary_2: "#FFDCD1",
      },
    },
  },
  plugins: [],
};
export default config;
