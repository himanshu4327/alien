import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Box, BoxProps } from "../Box";
import { ArrowDropDownIcon } from "../Svg";
import { Text } from "../Text";


const DropDownHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  // border-radius: 16px;
  backgound-color: #001D13;
  // background: ${({ theme }) => theme.colors.input};
  transition: border-radius 0.15s;
  fontFamily:"AlienSolid";
`;

const DropDownListContainer = styled.div`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  backgound-color: #001D13;
  // background: ${({ theme }) => theme.colors.input};
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;
  fontFamily:"AlienSolid";

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
    fontFamily:"AlienSolid";
  }
`;

const DropDownContainer = styled(Box)<{ isOpen: boolean }>`
  cursor: pointer;
  width: 100%;
  position: relative;

  backgound-color: #001D13;
  // background: ${({ theme }) => theme.colors.input};
  // border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;
  font-family:"AlienSolid";

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
    font-family:"AlienSolid";
  }

  ${(props) =>
    props.isOpen &&
    css`
      ${DropDownHeader} {
        border-bottom: 1px solid ${({ theme }) => theme.colors.inputSecondary};
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
        // border-radius: 16px 16px 0 0;
        font-family:"AlienSolid";
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        backgound-color: #001D13;
        border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
        border-top-width: 0;
        font-family:"AlienSolid";
        // border-radius: 0 0 16px 16px;
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`;

const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    backgound-color: #001D13;;
    // background: ${({ theme }) => theme.colors.inputSecondary};
  }
`;

export interface SelectProps extends BoxProps {
  options: OptionProps[];
  onOptionChange?: (option: OptionProps) => void;
  placeHolderText?: string;
  defaultOptionIndex?: number;
}

export interface OptionProps {
  label: string;
  value: any;
}

const Select: React.FunctionComponent<React.PropsWithChildren<SelectProps>> = ({
  options,
  onOptionChange,
  defaultOptionIndex = 0,
  placeHolderText,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(defaultOptionIndex);

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

  const onOptionClicked = (selectedIndex: number) => () => {
    setSelectedOptionIndex(selectedIndex);
    setIsOpen(false);
    setOptionSelected(true);

    if (onOptionChange) {
      onOptionChange(options[selectedIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (defaultOptionIndex) {
      setSelectedOptionIndex(defaultOptionIndex - 1);
      setOptionSelected(true);
    }
  }, [defaultOptionIndex]);

  return (
    <DropDownContainer isOpen={isOpen} {...props}>
      <DropDownHeader onClick={toggling}>
        <Text style={{fontFamily:"AlienSolid" , opacity:"0.5"}} color={!optionSelected && placeHolderText ? "text" : undefined}>
          {!optionSelected && placeHolderText ? placeHolderText : options[selectedOptionIndex].label}
        </Text>
      </DropDownHeader>
      <ArrowDropDownIcon color="text" onClick={toggling} />
      <DropDownListContainer>
        <DropDownList>
          {options.map((option, index) =>
            placeHolderText || index !== selectedOptionIndex ? (
              <ListItem onClick={onOptionClicked(index)} key={option.label}>
                <Text  style={{fontFamily:"AlienSolid" , opacity:"0.5"}} >{option.label}</Text>
              </ListItem>
            ) : null
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default Select;