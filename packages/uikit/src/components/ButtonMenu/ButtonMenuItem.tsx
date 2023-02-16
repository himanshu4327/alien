import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "../Button/Button";
import { BaseButtonProps, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  font-size: 16px;
  color: white;
  opacity: 0.5;
  // color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    // background: linear-gradient(242.24deg, #00F666 -86.49%, rgba(0, 246, 102, 0) 96.54%);
    // box-shadow: 0px 0px 11px -1px #00F666;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <Button as={as} variant={variants.ACTIVE} {...props} />;
};

export default ButtonMenuItem;
