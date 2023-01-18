import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  return (
    <Link external {...props} textAlign="center" m="1px">
      {children}
      {/* <OpenNewIcon color={props.color ? props.color : "primary"} ml="4px" /> */}
    </Link>
  );
};

export default LinkExternal;
