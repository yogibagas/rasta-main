import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
    farmStake: string,
    farmName: string,
    farmValue: number,
    farmBscLink: string,
}
export default function FooterCardFarms({farmStake, farmName, farmValue, farmBscLink}: Props) {
    return (
        <div className="space-y-8">
            <div className="flex justify-between w-full mt-8">
                <span className="text-orange-rasta">Stake:{farmStake}</span>
                <div className="flex flex-col md:flex-row space-x-4">
                    <span className="text-orange-rasta">{farmName}</span>
                    <Link to="/">
                        <FaIcons.FaShareSquare className="text-red-rasta"/>
                    </Link>
                </div>
            </div>
            <div className="flex items-end w-full justify-end">
                <span className="text-orange-rasta">{farmValue}</span>
            </div>
            <div className="flex justify-between w-full items-center">
                <Link to={farmBscLink === undefined ? "/" : farmBscLink} className="text-red-rasta">View on BscScan</Link>
                <div className="flex flex-row space-x-4 items-center text-red-rasta">
                    <span className="font-bold text-md">DETAIL</span>
                    <FaIcons.FaChevronCircleUp/>
                </div>
            </div>
        </div>
    )
}
