import styled from "styled-components";
import { Flex, Text } from "../../../components";

export const BaseCell = styled(Flex)`
  color: black;
  padding: 24px 8px;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const CellContent = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  max-height: 40px;
  width: 100%;
  ${Text} {
    line-height: 1.2;
  }
`;
