import { MenuEntry } from 'rasta-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.rasta.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.rasta.finance/#/pool',
      },
    ],
  },
  {
    label: 'Mr. Rasta Farms',
    icon: 'LionIcon',
    href: '/farms',
  },
  {
    label: 'Mr. Rasta Pools',
    icon: 'LionIcon',
    href: '/pools',
  },
  {
    label: 'Stake Rasta',
    icon: 'StakeIcon',
    href: '/stake',
  },
  {
    label: 'Ms. Rasta Farms - (Paused)',
    icon: 'LionnessIcon',
    href: 'https://m.rasta.finance/farms',
  },
  {
    label: 'Ms. Rasta Pools - (Paused)',
    icon: 'LionnessIcon',
    href: 'https://m.rasta.finance/pools',
  },
  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: 'https://rasta.finance/files/RastaAudit.pdf',
  },
  // {
  //  label: 'Rasino',
  //  icon: 'RasinoIcon',
  //  href: 'https://rasta.finance/Rasino.html',
  // },
  // {
  //   label: 'Stats (Coming soon)',
  //   icon: 'StatsIcon',
  //   href: '',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/rasta-finance/',
      },
      {
        label: 'Whitepaper',
        href: 'https://docs.rasta.finance',
      },
      {
        label: 'Medium',
        href: 'https://rastafinance.medium.com',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/rasta-finance',
      },
      {
        label: 'Chart',
        href: 'https://dex.guru/token/0xe3e8cc42da487d1116d26687856e9fb684817c52-bsc',
      },
    ],
  },
]

export default config
