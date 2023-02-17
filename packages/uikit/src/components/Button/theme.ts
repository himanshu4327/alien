import { NotEnoughTokensModal } from "../../widgets/Modal";
import { scales, variants } from "./types";
import { border } from "styled-system";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "invertedContrast",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "textSubtle",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },

  [variants.ALIEN]: {
    color: "#00F666",
    borderImage: "linear-gradient( #00F666 100%, #00F666 0%)",
    boxShadow: "1px 0px 2px #00f666, 1px -1px 0px #017531",
    backdropFilter: "blur(5.5px)",
    background: "radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%)",
  },
  [variants.ALIENACTIVE]: {
    color: "#fff",
    borderImage: "linear-gradient( #00F666 100%, #00F666 0%)",
    boxShadow: "1px 0px 2px #00f666, 1px -1px 0px #00f666",
    backdropFilter: "blur(5.5px)",
    background: "radial-gradient(52.44% 52.44% at 50.26% 115.85%, #00F666 0%, rgba(2, 73, 32, 0.2) 100%)",
  },
  [variants.TRANSPARENT]: {
    background: "none",
    border: "0px",
  },
  [variants.ACTIVE]: {
    background: "linear-gradient(242.24deg, #00F666 -86.49%, rgba(0, 246, 102, 0) 96.54%)",
    boxShadow: "inset 10px 0px 4px 1px #fff;",
  },
  [variants.MODALACTIVE]: {
    background: "linear-gradient(242.24deg, #00F666 -86.49%, rgba(0, 246, 102, 0) 96.54%)",
    boxShadow: "0px 0px 10px 0px rgba(0, 246, 102, 0.5)",
    border: "0.5px solid #00F666",
  },
};
