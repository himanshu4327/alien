import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [scales.XL]: {
    fontSize: "35px",
    fontSizeLg: "70px",
    lineHeight: "101.7%",
    textShadow: "-1px 0px 12px #00F666;",
    fontWeight: "400",
    letterSpacing: "0.12em",
    color: "#00F666",
  },
  [scales.XXL]: {
    fontSize: "42px",
    fontSizeLg: "70px",
    lineHeight: "137.2%",
    textShadow: "-1px 0px 12px #00F666",
    fontWeight: "400",
    letterSpacing: "0.12em",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;
  //  font-family:"AlienSolid";

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
    // font-family:"AlienSolid";
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
