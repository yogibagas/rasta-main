import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from 'rasta-uikit'
import { BLOCKS_PER_YEAR, RASTA_PER_BLOCK, RASTA_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceRastaBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
// import { QuoteToken, PoolCategory } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
// import useBlock from 'hooks/useBlock'
import { useGetPriceData, useGetCNSPriceVsBnb } from 'hooks/api'
import useMRastaPrice from 'hooks/useMRastaPrice'
// import { getBalanceNumber } from 'utils/formatBalance'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'
// import PoolCard from '../Stake/components/PoolCard'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmList = useFarms()
  const rastaPrice = usePriceRastaBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const ethPriceUsd = usePriceEthBusd()
  const priceData = useGetPriceData()
  // const pools = usePools(account)
  // const block = useBlock()
  const mrastaPrice = useMRastaPrice()
  const cnsPriceVsBnb = useGetCNSPriceVsBnb()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  // const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
  //   const tokenPriceBN = new BigNumber(tokenPrice)
  //   if (tokenName === 'BNB') {
  //     return new BigNumber(1)
  //   }
  //   if (tokenPrice && quoteToken === QuoteToken.BUSD) {
  //     return tokenPriceBN.div(bnbPrice)
  //   }
  //   return tokenPriceBN
  // }

  const [stackedOnly, setStackedOnly] = useState(false)

  const farmsLP = farmList.filter((farm) => !farm.lpSymbol.includes('RLP'))
  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const stackedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const rastaPriceVsBNB = new BigNumber(
        farmList.find((farm) => farm.pid === RASTA_POOL_PID)?.tokenPriceVsQuote || 0,
      )
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken || !priceData) {
          return farm
        }
        const cakeRewardPerBlock = RASTA_PER_BLOCK.times(farm.poolWeight)
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let price = ''
        if (farm.tokenSymbol === 'CAKE') {
          price = priceData.prices.Cake
        } else if (farm.tokenSymbol === 'MRASTA') {
          price = mrastaPrice.toString()
        } else if (farm.lpSymbol === 'CNR') {
          price = new BigNumber(cnsPriceVsBnb).times(115).times(bnbPrice).toString()
        } else {
          price = priceData.prices[farm.tokenSymbol]
        }

        const apy = rastaPriceVsBNB
          .times(bnbPrice)
          .times(cakeRewardPerYear)
          .div(new BigNumber(farm.singleTokenAmount).times(Number(price)))

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={rastaPrice}
          ethPrice={ethPriceUsd}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, ethPriceUsd, rastaPrice, ethereum, account, priceData, farmList, mrastaPrice, cnsPriceVsBnb],
  )

  // const poolsWithApy = pools.map((pool) => {
  //   const rastaFarm = farmList.find((f) => f.pid === 0)
  //   const cakeRewardPerBlock = RASTA_PER_BLOCK.times(rastaFarm.poolWeight)
  //   const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

  //   const apy = cakeRewardPerYear.times(100).div(new BigNumber(rastaFarm.singleTokenAmount))

  //   return {
  //     ...pool,
  //     isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
  //     apy,
  //   }
  // })

  return (
    <Page>
      <Heading as="h1" size="lg" color="#292525" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(696, 'Stake Tokens')}
        <br />
        {TranslateString(696, '& Earn Brand New Rasta Tokens')}
      </Heading>
      <FarmTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {/* {!stackedOnly && poolsWithApy.map((pool) => <PoolCard key={pool.sousId} pool={pool} />)} */}
            {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
    </Page>
  )
}

export default Farms
