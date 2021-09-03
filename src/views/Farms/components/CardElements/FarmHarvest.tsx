import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

type Props = {
  farmEarned: any,
  harvestLink: string,
  depositFee: string,
}

export default function FarmHarvest({farmEarned, harvestLink, depositFee}: Props) {
    return (
        <div>
            <div className="row flex flex-col md:flex-row gap-12 w-full border-b-2 border-black pb-12 mb-6">
              <div className="items-detail flex flex-col pb-2  pr-16 ml-2">
                <h2 className="text-3xl font-bold text-left">${farmEarned}</h2>
                <span className="text-red-rasta text-left">Rasta Earned</span>
                <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-xl">
                 <Link to={harvestLink === undefined ? "/" : harvestLink} className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center">
                     <FaIcons.FaSearchDollar/>
                     <span>Harvest</span>
                 </Link>
                </div>
              </div>

              <div className="apr bg-gray-300 w-full max-w-xs px-6 py-2 text-left flex flex-col rounded-lg justify-center">
                <span className="apr-value text-2xl w-full text-gray-700 ">
                  {depositFee}%
                </span>
                <span className="apr-label text-red-rasta text-md">Deposit Fee</span>
              </div>
            </div>
        </div>
    )
}
