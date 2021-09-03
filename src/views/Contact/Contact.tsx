import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import Heading from './components/Heading'
import Forms from './components/Forms'

export default function Contact() {
    const heading = {
        title:'Contact Us',
        desc: <>Feel free to contact us any time<br />Let’s make some magic together!</>
    };
    const fields = [
        {
            name:'name',
            type:'text',
            placeholder:'Name'
        },
        {
            name:'email',
            type:'email',
            placeholder:'Email'
        },
        {
            name:'message',
            type:'textarea',
            placeholder:'Message'
        },
    ];
    const contactInfo = {
        title: 'Contact Info',
        detail : [{
                icon:<IoIcons.IoIosPhonePortrait/>,
                text:'00-0000-000',
                link:'tel:00-0000-000'
            },
            {
                icon:<FaIcons.FaRegEnvelope/>,
                text:'loremipsum@rasta.finance',
                link:'mailto:loremipsum@rasta.finance'
            }
        ],

        socialMedia : [
            {
                icon: <FaIcons.FaTwitter/>,
                link:'#'
            },
            {
                icon: <FaIcons.FaTelegramPlane/>,
                link:'#'
            },
            {
                icon: <Io5Icons.IoLogoTiktok/>,
                link:'#'
            },
            {
                icon: <FaIcons.FaMediumM/>,
                link:'#'
            },
        ]
    }
    return (
        <div>
            <Heading title={heading.title} desc={heading.desc}/>
            <Forms fields={fields} contactInfo={contactInfo}/>
        </div>
    )
}
