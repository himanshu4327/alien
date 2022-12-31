import React from "react";
import styled from "styled-components";
// import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;
const Logoround = styled.div`
  width: 32px;
  height: 32px;
  background-image: url("/images/nav/logo.png");
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({ cakePriceUsd, color = "#fff", showSkeleton = true }) => {
  return cakePriceUsd ? (
    <PriceLink href="#" target="_blank">
      <Logoround />
      <Text   fontFamily="AlienSolid" color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
