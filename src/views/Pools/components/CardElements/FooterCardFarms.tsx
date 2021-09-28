import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
  farmStake: string
  // farmName?: string,
  farmValue: string
  farmBscLink: string
  addLPurl?: string
}
export default function FooterCardFarms({ farmStake, farmValue, farmBscLink, addLPurl }: Props) {
  const [show, setShow] = useState(false)
  return (
    <div className="space-y-8">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-orange-rasta">Get:</span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-orange-rasta">{farmStake}</span>
              <a href={addLPurl} target="_blank" rel="noreferrer">
                <FaIcons.FaShareSquare className="text-red-rasta" />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-orange-rasta">Total:</span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-orange-rasta">{farmValue}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <div />
        <div
          className="flex flex-row space-x-4 items-center text-red-rasta cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span className="font-bold text-md">DETAIL</span>
          {show && <FaIcons.FaChevronCircleUp />}
          {!show && <FaIcons.FaChevronCircleDown />}
        </div>
      </div>
    </div>
  )
}
