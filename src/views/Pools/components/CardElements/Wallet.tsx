import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWalletModal } from 'rasta-uikit'
import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BinanceWallet from '../../../../assets/wallet/binance-wallet.png'
import MathWallet from '../../../../assets/wallet/math-wallet.png'
import MetaMask from '../../../../assets/wallet/meta-mask.png'
import TokenPocket from '../../../../assets/wallet/token-pocket.png'
import TrustWallet from '../../../../assets/wallet/trust-wallet.png'
import WalletConnect from '../../../../assets/wallet/wallet-connect.png'

export default function Wallet() {
  const [showModal, setShowModal] = useState(false)
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const connectWallet = (what) => {
    if (what === 'walletconnect') connect('walletconnect')
    else connect('injected')
  }
  const wallet = [
    {
      name: 'Metamask',
      icon: MetaMask,
      link: 'injected',
    },
    {
      name: 'TrustWallet',
      icon: TrustWallet,
      link: '/',
    },
    {
      name: 'MathWallet',
      icon: MathWallet,
      link: '/',
    },
    {
      name: 'TokenPocket',
      icon: TokenPocket,
      link: '/',
    },
    {
      name: 'WalletConnect',
      icon: WalletConnect,
      link: 'walletconnect',
    },
    {
      name: 'Binance Chain',
      icon: BinanceWallet,
      link: '/',
    },
  ]
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-rasta pb-8 outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                  <h3 className="text-3xl font-semibold">Connect to a Wallet</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex">
                  <div className="grid grid-cols-3 mx-auto gap-4">
                    {wallet.map((item, index) => {
                      return (
                        <span
                          className="wallet-wrap flex flex-col space-y-3 bg-gray-inBlack px-2 py-4 rounded-xl items-center cursor-pointer"
                          onClick={(e) => connectWallet(item.link)}
                          key={index}
                        >
                          <span>
                            <img src={item.icon} alt="icon" />
                          </span>
                          <span>{item.name}</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      <span
        className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"
        onClick={(e) => setShowModal(true)}
      >
        <FaIcons.FaWallet />
        <span>Unlock Wallet</span>
      </span>
    </div>
  )
}
