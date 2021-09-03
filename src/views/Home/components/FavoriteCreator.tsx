import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import BgImage from "../../../assets/favCreator-bg.jpg";

export default function FavoriteCreator() {
  return (
    <div>
      <div
        className="flex w-full text-black flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full md:max-w-screen-xl md:mx-auto items-center items-center md:flex-row text-center items-center h-64">
          <div className="leftSection w-full ">
            <h2 className="text-2xl md:text-5xl font-bold leading-tight">
              Interact with Your Favorite Creators.<br/>
              <span className="text-yellow-rasta">Completely Decentralized.</span>
            </h2>
            <div className="desc">
              <p className="mt-4">
              We are bridging creators with their fans, using the latest in blockchain technology.
Interact with your favorite artist, pledge support, and earn money.
All through your own private screen and wallet.
              </p>
            </div>
            <div className="cta flex flex-row mt-8 space-x-8 items-center text-center">
              <Router>
                <Link
                  to="/"
                  className="bg-gradient-to-r font-bold text-white mx-auto from-yellow-rasta to-green-rasta_cta text-center py-3 px-8 rounded-xl"
                >
                  <button className="uppercase" type="button">Go To Launch Pad</button>
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r text-white from-red-rasta to-yellow-rasta py-8 pb-16">
        <div className="flex flex-col md:flex-row w-full px-4 md:px-0 md:w-10/12 mx-auto items-center">
          <div className="text w-full md:w-8/12 text-center md:text-left">
            <span className="text-2xl font-bold block">REQUEST A LAUNCH:</span>
            <span className="block">
              Sign up to join the community as an artist, and receive direct
              financial benefit from your fan-base and the entire
              RastaCommunity.
            </span>
          </div>
          <div className="text w-full md:w-4/12 text-center mt-8   md:text-right">
            <Router>
              <Link
                to="/"
                className="bg-red-rasta font-bold text-white mx-auto text-center py-4 px-8  rounded-xl"
              >
                <button type="button">SIGN IN AS AN ARTIST</button>
              </Link>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}
