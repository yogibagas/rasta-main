import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const menu = [
        {
            label: "Home",
            path: "/",
            icon: <FaIcons.FaHome className="inline-block" />,
            parent: false,
            child: [],
        },
        {
            label: "About",
            path: "/about",
            icon: <RiIcons.RiErrorWarningFill className="inline-block" />,
            parent: false,
            child: [],
        },
        {
            label: "Trade",
            path: "/trade",
            icon: <IoIcons.IoIosSwap className="inline-block" />,
            parent: false,
            child: [],
        },
        {
            label: "Rasino",
            path: "#",
            icon: <AiIcons.AiFillDollarCircle className="inline-block" />,
            parent: true,
            child: [],
        },
        {
            label: "Farms",
            path: "#",
            icon: <RiIcons.RiCoinLine className="inline-block" />,
            parent: true,
            child: [
                {
                path: "/farming/mr-rasta",
                label: "Mr. Rasta",
                },
                {
                path: "/farming/mrs-rasta",
                label: "Mrs. Rasta",
                },
            ],
        },
        {
        label: "Pools",
        path: "#",
        icon: <GiIcons.GiTwoCoins className="inline-block" />,
        parent: true,
        child: [
            {
            path: "#",
            label: "Mr. Rasta",
            },
            {
            path: "#",
            label: "Mrs. Rasta",
            },
        ],
        },
        {
            label: "Top Launch Pad",
            path: "#",
            icon: <AiIcons.AiFillStar className="inline-block" />,
            parent: false,
            child: [],
        },
        {
            label: "Community",
            path: "#",
            icon: <Io5Icons.IoChatboxEllipsesOutline className="inline-block" />,
            parent: true,
            child: [
                {
                path: "#",
                label: "Telegram",
                },
                {
                path: "#",
                label: "Coin Market Cap",
                },
                {
                path: "#",
                label: "Whitepaper",
                },
                {
                path: "#",
                label: "Medium",
                },
                {
                path: "#",
                label: "Dapp Radar",
                },
                {
                path: "#",
                label: "Chart",
                },
            ],
        },
        {
            label: "Contact",
            path: "/contact/",
            icon: <FaIcons.FaPhone className="inline-block transform rotate-90" />,
            parent: false,
            child: [],
        },
    ];

  return (
    <div className="text-white">
      <div className="navbar text-white">
        <Link to="/" className="menu-bars text-2xl">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={`h-screen w-auto top-0 py-6 px-8 bg-gray-rasta z-50 absolute transition duration-1000 ${sidebar ? "left-0" : "-left-full"}`}
      >
        <Link to="/" className="menu-bars absolute right-4 text-3xl text-white">
          <FaIcons.FaRegWindowClose onClick={showSidebar} />
        </Link>
        <ul className="menu-items text-white mt-12 text-2xl space-y-4">
          {menu.map((item, index) => {
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex flex-row space-x-4 items-center" onClick={showSidebar}
                >
                  {item.icon}
                  <span className="flex-grow-1 pr-8">{item.label}</span>
                  {item.parent && <IoIcons.IoIosArrowDropright/>}
                </Link>
                {item.child.length > 0 && (
                    <ul className="flex flex-col items-start text-sm">
                    {item.child.map((i,id) => {
                       return <li key={i.label}>
                            <Link to={i.path} onClick={showSidebar} >
                              <span className="ml-10">{i.label}</span>
                            </Link>
                        </li>
                    })}
                    </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
