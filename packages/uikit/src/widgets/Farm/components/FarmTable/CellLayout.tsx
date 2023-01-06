import styled from "styled-components";

const Label = styled.div`
  font-size: 12px;
  // color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  line-height: 13px;
  letter-spacing: 0.12em;
  font-family:"AlienSolid";
  opacity:0.5;
`;

const ContentContainer = styled.div`
  min-height: 24px;

  display: flex;
  align-items: center;
  font-family:"AlienSolid";
  
 
`;

interface CellLayoutProps {
  label?: string;
}

const CellLayout: React.FC<React.PropsWithChildren<CellLayoutProps>> = ({ label = "", children }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};

export default CellLayout;
