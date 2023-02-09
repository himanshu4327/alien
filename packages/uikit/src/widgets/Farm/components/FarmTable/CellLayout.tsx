import styled from "styled-components";
import { Flex } from "../../../../components";

const Label = styled.div`
  font-size: 12px;
  // color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  line-height: 13px;
  letter-spacing: 0.12em;
  opacity: 0.5;
`;

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  color: #fff;
`;

interface CellLayoutProps {
  label?: string;
}

const CellLayout: React.FC<React.PropsWithChildren<CellLayoutProps>> = ({ label = "", children }) => {
  return (
    <Flex flexDirection="column" justifyContent="center">
      {label && <Label>{label}</Label>}
      <ContentContainer>{children}</ContentContainer>
    </Flex>
  );
};

export default CellLayout;
