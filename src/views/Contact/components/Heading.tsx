import React from 'react'
import RastaCoins from "../../../assets/lion-coins.png"

export default function Heading({ title, desc }: { title: string; desc: any }) {
  return (
    <div className="w-full to-black pb-32" style={{
      backgroundImage: `url(${RastaCoins})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="max-w-screen-xl text-white flex flex-col mx-auto pt-8 pb-16 px-4 md:px-0 md:py-56">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <p className="mt-8 leading-loose  text-center">{desc}</p>
      </div>
    </div>
  )
}
