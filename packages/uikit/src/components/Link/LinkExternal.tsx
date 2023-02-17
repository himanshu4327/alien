import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";
import { Box } from "../Box";
import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  top: -5px;
  margin-right: 5px;
`;
const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      <StyledBox>
        <OpenNewIcon color={props.color ? props.color : "#fff"} />
      </StyledBox>
      {children}
    </Link>
  );
};

export default LinkExternal;
