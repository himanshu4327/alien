import styled, { DefaultTheme, keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { CardProps } from "./types";

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBorderColor = ({ isActive, isSuccess, isWarning, borderBackground, theme }: StyledCardProps) => {
  if (borderBackground) {
    return borderBackground;
  }
  if (isWarning) {
    return theme.colors.warning;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`;
  }

  return theme.colors.cardBorder;
};

export const StyledCard = styled.div<StyledCardProps>`
  background: radial-gradient(78.23% 23.54% at 49.89% 118.47%, #00f666 0%, rgba(2, 73, 32, 0.2) 100%);
  backdrop-filter: blur(5.5px);
  border-radius: ${({ theme }) => theme.radii.card};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;
  border-radius: 0;
  // max-width: 320px;
  //box-shadow: -1px 1px 1px #00f666, -1px -1px 1px #00f666;
  border-left: 1px solid #017531;
  border-top: 1px solid #017531;
  border-bottom: 1px solid #017531;
  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${PromotedGradient} 3s ease infinite;
      background-size: 400% 400%;
    `}
  padding: 1px 1px 3px 1px;

  ${space}
`;

export const StyledCardInner = styled(Box)<{ background?: string; hasCustomBorder: boolean }>`
  // width: 100%;
  height: 100%;
  overflow: ${({ hasCustomBorder }) => (hasCustomBorder ? "initial" : "inherit")};
  // background: radial-gradient(50.44% 30.44% at 50.26% 117.85%, #00f666 0%, rgba(0, 0, 0, 0.2) 100%);
  backdrop-filter: blur(7.5px);
  //background: #00190a;
  border-radius: 0px;
  //border-radius: ${({ theme }) => theme.radii.card};
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};
