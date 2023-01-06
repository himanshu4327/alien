import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { getBalanceNumber } from "@pancakeswap/utils/formatBalance";
import { Text } from "../../../../components/Text";
import { Skeleton } from "../../../../components/Skeleton";
import { Flex } from "../../../../components/Box";
import Tags from "../Tags";
import { FarmTableFarmTokenInfoProps } from "../../types";

const Container = styled.div`
  
  
  display: flex;
  align-items: center;
   gap:32px;
  font-family:"AlienSolid";
 
  ${({ theme }) => theme.mediaQueries.sm} {
   
  
    justify-content: space-between;
  }
`;

const TokenWrapper = styled.div`
  // padding-right: 8px;
  width: 32px;
  


  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50px;
    
background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
border: 1px solid #00F666;
box-sizing: border-box;
   
  }
`;

const Farm: React.FunctionComponent<React.PropsWithChildren<FarmTableFarmTokenInfoProps>> = ({
  label,
  isReady,
  isStable,
  stakedBalance,
  children,
}) => {
  const { t } = useTranslation();
  const rawStakedBalance = stakedBalance ? getBalanceNumber(stakedBalance) : 0;

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t("Farming")}
        </Text>
      );
    }
    return <></>;
  };

  if (!isReady) {
    return (
      <Container>
        <Skeleton mr="8px" width={32} height={32} variant="circle" />
        <div>
          <Skeleton width={40} height={10} mb="4px" />
          <Skeleton width={60} height={24} />
        </div>
      </Container>
    );
  }

  const pairContainer = (
    <Container>
      <TokenWrapper>{children}</TokenWrapper>
      <div>
        {/* {handleRenderFarming()} */}
        <Text   style={{fontFamily:"AlienSolid"}} bold>{label}</Text>
      </div>
    </Container>
  );

  return isStable ? (
    <Flex flexDirection="column">
      {pairContainer}
      <Tags.StableFarmTag mt="4px" />
    </Flex>
  ) : (
    pairContainer
  );
};

export default Farm;
