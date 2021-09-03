import { getCakeAddress } from 'utils/addressHelpers'
import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'RASTA',
    stakingTokenName: QuoteToken.RASTA,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      97: '0x35b1EF3FF9763F72C11e9f08B471D0b6b5A7515D',
      56: '0xec89Be665c851FfBAe2a8Ded03080F3E64116539',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://rasta.finance/',
    harvest: true,
    tokenPerBlock: '0.0338409478',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 1,
    tokenName: 'CNS',
    stakingTokenName: QuoteToken.RASTA,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      97: '',
      56: '0x05Cd67EbcbE2EE82B0A9b031349Ae7D0976cB907',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.centric.com/',
    harvest: true,
    tokenPerBlock: '22',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 8,
  },
  {
    sousId: 2,
    tokenName: 'CROX',
    stakingTokenName: QuoteToken.RASTA,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      97: '',
      56: '0x30a3b320434baa34fbc2aed6792ee2d625ffdffc',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://croxswap.com',
    harvest: true,
    tokenPerBlock: '0.0057',
    sortOrder: 3,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 10001,
    tokenName: 'CNS',
    stakingTokenName: QuoteToken.RASTA,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      97: '',
      56: '0x32b8474919EdFC658b81186Eb5dcA3d236A306CA',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.centric.com/',
    harvest: true,
    tokenPerBlock: '0',
    sortOrder: 10001,
    isFinished: true,
    tokenDecimals: 18,
  },
]

export default pools
