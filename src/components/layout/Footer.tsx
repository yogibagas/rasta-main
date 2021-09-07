import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";
import Logo from "../../assets/logo.png";

export default function Footer() {
  const textUnderLogo = ["@rastafinance", "www.rasta.finance"];
  const navigation = [
    {
      title: "Useful Links",
      item: [
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Farms", path: "#" },
      ],
    },
    {
      title: "Farms",
      item: [
        { label: "Mr. Rasta", path: "/farms/mr-rasta" },
        { label: "Mrs. Rasta", path: "/farms/mrs-rasta" },
      ],
    },
  ];
  const socialMedia = [
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "https://www.twitter.com/rastafinance" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Telegram", icon: <FaIcons.FaTelegramPlane />, link: "#" },
    { name: "Reddit", icon: <FaIcons.FaReddit />, link: "#" },
    { name: "Medium", icon: <FaIcons.FaMediumM />, link: "#" },
    { name: "Youtube", icon: <FaIcons.FaYoutube />, link: "#" },
  ]
  function ShowLinks(props) {
    const items = props.items;
    return items.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.path}>
            <span className="">{item.label}</span>
          </Link>
        </li>
      );
    });
  }
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="mx-auto w-10/12">
        <div className="flex flex-col md:flex-row space-between border-b-1 pb-8 mb-4">
          <div className="flex-grow-1 flex flex-col">
            <LazyLoadImage
              src={Logo}
              alt="Logo"
              className="w-64"
              effect="blur"
            />
            {textUnderLogo.map((item, index) => {
              return (
                <span key={index} className="pl-6">
                  {item}
                </span>
              );
            })}
          </div>
          {navigation.map((item, index) => {
            return (
              <div
                className="flex flex-col mr-4 last:mr-0 pl-6 md:pl-0 mt-4"
                key={index}
              >
                {item.title}
                  <ul className="list-none mt-6 text-yellow-rasta">
                    <ShowLinks items={item.item} />
                  </ul>
              </div>
            );
          })}
        </div>

        <div className="bottom-footer flex space-between pl-6 md:pl-0 pr-6 md:pr-0 flex-col md:flex-row w-full space-between mx-auto">
          <div className="copyright flex-grow-1">
            <span><a href="/" className="text-yellow-rasta">Rasta Finance</a> 2021 // All Right Reserved</span>
          </div>
          <div className="social-media text-left md:text-right justify-items-end">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4">
                {socialMedia.map((item, index) => {
                  return (
                    <a
                      className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 border-1 border-white rounded-full p-2 hover:bg-yellow-rasta hover:text-green-rasta"
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.icon}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
