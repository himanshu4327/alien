import styled from "styled-components";

export const ActionContainer = styled.div`
  padding: 16px;
  border: 1px solid #00f666;
  flex-grow: 1;
  flex-basis: 0;
  margin: 10px;
`;

export const ActionTitles = styled.div`
  display: flex;
`;

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
`;

export const StyledActionContainer = styled(ActionContainer)`
  &:nth-child(3) {
    flex-basis: 100%;
  }
  min-height: 125px;
  ${({ theme }) => theme.mediaQueries.sm} {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`;
