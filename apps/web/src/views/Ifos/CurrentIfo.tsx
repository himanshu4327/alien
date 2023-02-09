import { useMemo } from 'react'

// import useGetPublicIfoV3Data from 'views/Ifos/hooks/v3/useGetPublicIfoData'
// import useGetWalletIfoV3Data from 'views/Ifos/hooks/v3/useGetWalletIfoData'

import useGetPublicIfoV1Data from 'views/Ifos/hooks/v1/useGetPublicIfoData'
import useGetWalletIfoV1Data from 'views/Ifos/hooks/v1/useGetWalletIfoData' 


import { Ifo } from 'config/constants/types'

import { IfoCurrentCard } from './components/IfoFoldableCard'
import IfoContainer from './components/IfoContainer'
import IfoSteps from './components/IfoSteps' 

interface TypeProps {
  activeIfo: Ifo
}

const CurrentIfo: React.FC<React.PropsWithChildren<TypeProps>> = ({ activeIfo }) => {
  

  const publicIfoData = useGetPublicIfoV1Data(activeIfo);
  
  const walletIfoData = useGetWalletIfoV1Data(activeIfo);

  // console.log("publicIfoData", publicIfoData);
  // console.log("walletIfoData", walletIfoData);

  const { poolBasic, poolUnlimited } = walletIfoData


  // console.log("poolBasic", poolBasic);
  // console.log("poolUnlimited", poolUnlimited);

  const isCommitted = useMemo(
    () =>
      poolBasic?.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited?.amountTokenCommittedInLP.isGreaterThan(0),
    [poolBasic?.amountTokenCommittedInLP, poolUnlimited?.amountTokenCommittedInLP],
  )

  return (
    <IfoContainer
      ifoSection={<IfoCurrentCard ifo={activeIfo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />}
      ifoSteps={
        <IfoSteps
          isLive={publicIfoData.status === 'live'}
          hasClaimed={poolBasic?.hasClaimed || poolUnlimited.hasClaimed}
          isCommitted={isCommitted}
          ifoCurrencyAddress={activeIfo.currency.address}
        />
      }
    />
  )
}

export default CurrentIfo
