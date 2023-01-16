import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 10px;
  }
  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
    background: linear-gradient(242.24deg, #00F666 -86.49%, rgba(0, 246, 102, 0) 96.54%);
    box-shadow: inset 0px 0px 4px 1px #00F666;
    color:#fff;
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 0.12em;
  color: #ffffff;
  font-size: 12px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  opacity: ${({ $isActive }) => ($isActive ? 0.8 : 0.5)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "inherit")};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 16px;
    // margin: 10px;
  }
  // ${({ theme }) => theme.mediaQueries.md} {
  //   font-size: 16px;
  //   margin: 0 20px;
  // }
  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      font-family: 'Alien Encounters Solid';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
/* identical to box height */
letter-spacing: 0.12em;
color: #FFFFFF;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    color: "#001D13";
    background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
  }
`;

export default StyledMenuItem;
