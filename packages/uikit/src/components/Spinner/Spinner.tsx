import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;
const FloatingUfosTopRight = styled.div`
  background-image: url("/images/alien/spaceRight.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: -3rem;
  top: 3rem;
  animation: ${rotate} 2s ease-in-out infinite;
  width: 100px;
  height: 100px;
  display: block;
  overflow: hidden;
`;
const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingUfosTopRight />
    </Container>
  );
};

export default Spinner;
