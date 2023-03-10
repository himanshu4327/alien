import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const Text = styled.div<TextProps>`
  color: ${getColor};
  // font-family: "AlienSolid";
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 189%;
// opacity: 0.5;

letter-spacing: 0.12em;


  
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}

  ${({ small }) => small && `font-size: 14px;`}
`;

Text.defaultProps = {
  color: "text",
  small: false,
  fontSize: "16px",
  ellipsis: false,
  // fontFamily:"AlienSolid"
};

export default Text;
