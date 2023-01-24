import styled from "styled-components";
import { ToggleProps, HandleProps, InputProps, ScaleKeys, scales, StyleToggleProps } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "36px",
  },
  md: {
    handleHeight: "26px",
    handleWidth: "26px",
    handleLeft: "3px",
    handleTop: "3px",
    checkedLeft: "calc(100% - 30px)",
    toggleHeight: "32px",
    toggleWidth: "56px",
  },
  lg: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "4px",
    handleTop: "4px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const Handle = styled.div<HandleProps>`
  // background-color: ${({ theme }) => theme.toggle.handleBackground};
  // border-radius: 50%;
  background-color: black;
  background: linear-gradient(242.24deg, #00f666 -86.49%, rgba(0, 246, 102, 0) 96.54%);
  // box-shadow: 0px 0px 11px -1px #00F666;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;
  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
    background: #013120;
  }
  &:focus + ${Handle} {
    box-shadow: 2px 0px 3px 1px #00f666;
  }
  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: 2px 0px 3px 1px #00f666;
  }
`;

const StyledToggle = styled.div<StyleToggleProps>`
  align-items: center;
  background-color: ${({ theme, $checked, $checkedColor, $defaultColor }) =>
    theme.colors[$checked ? $checkedColor : $defaultColor]};
  box-shadow: 2px 0px 3px 1px #00f666;
  // border-radius: 24px;
  //  border: 2px solid #00F666;
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default StyledToggle;
