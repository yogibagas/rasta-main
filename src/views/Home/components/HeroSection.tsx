import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroImage from "../../../assets/lion-coin.png";

export default function HeroSection() {
  const counter = [
    { label: "Counter", numbers: "3256" },
    { label: "Holders", numbers: "56879" },
    { label: "Transfers", numbers: "$235.008+" },
    { label: "Continents", numbers: "6" },
  ]
  return (
    <div>
      <div className="flex w-full  py-16 bg-gradient-to-b from-black to-red-rasta via-black text-white flex-col">
        <div className="flex w-full px-8 md:px-0 md:max-w-screen-xl md:mx-auto items-center flex-col md:flex-row">
          <div className="leftSection w-full md:w-6/12">
            <h1 className="text-5xl font-bold text-center md:text-left md:pr-48 leading-tight">
              <span className='text-yellow-rasta'>Pride and Joy</span><br /> of the Binance Smart Chain
            </h1>
            <p className="mt-8 text-center md:text-left">Join thousands of Rastas on a journey to ZION. RastaFinance is decentralizing finance,
      using the latest in blockchain technology. Seize the power of your own money,
      join the revolution.</p>
            <div className="cta flex-row mt-8 space-x-8 hidden md:flex">
              <Router>
                <Link to="/" className="bg-gradient-to-r font-bold w-1/3 from-yellow-rasta to-green-rasta_cta text-center py-3 rounded-xl">
                  <button type="button">Farm Rasta Now</button>
                </Link>
                <Link to="/" className="border-2 font-bold border-yellow-rasta py-3 rounded-xl w-1/3 text-center">
                  <button type="button">Buy Rasta</button>
                </Link>
              </Router>
            </div>
          </div>
          <div className="images hidden md:block md:w-6/12 text-right">
            <LazyLoadImage
              src={HeroImage}
              alt="Logo"
              className="w-full mx-auto"
              effect="blur"
            />
          </div>
        </div>
        <div className=" w-full hidden md:flex md:block md:max-w-screen-xl md:mx-auto items-center md:flex-row space-x-8 my-16">
            {counter.map((item,index) => {
                return <div className="w-1/4 bg-red-rasta rounded-xl text-center py-6" key={item.label}>
                    <div className="number text-3xl font-bold">{item.numbers}</div>
                    <div className="desc">{item.label}</div>
                    </div>
            })}
        </div>
      </div>
    </div>
  );
}
