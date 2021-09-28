import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  fields: any[]
  contactInfo: any
}
export default function Form({ fields, contactInfo }: Props) {
  return (
    <div className="bg-white pb-32 flex px-8 md:px-0">
      <div className="max-w-screen-xl mx-auto bg-white shadow-box flex flex-col md:flex-row  -mt-32 md:-mt-64 w-full md:px-0">
        <div className="forms flex items-center  px-4 md:px-32 py-16 w-full md:w-3/5">
          <form action="" className="flex-grow-1 ">
            <div className="fields space-y-12">
              {fields.map((item, index) => {
                return (
                  <div className="w-full" key={index}>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      className="w-full py-4 px-2
                     border-b-1 border-gray-400"
                    />
                  </div>
                )
              })}
            </div>
            <div className="button w-full flex items-center mt-24">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-rasta to-green-rasta py-2 rounded-xl mx-auto w-full md:w-2/4"
              >
                SEND IT
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info bg-gray-rasta flex-grow-1 py-16 px-12 flex flex-col">
          <h2 className="text-2xl font-bold">{contactInfo.title}</h2>
          <div className="detail flex flex-col space-y-16 mt-16 md:mt-24">
            {contactInfo.detail.map((item, index) => {
              return (
                <div className="" key={index}>
                  <Link to={item.link} className="flex flex-row flex-grow-1 items-center space-x-4 ">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="social mt-16 md:mt-24 flex flex-row space-x-4">
            {contactInfo.socialMedia.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="rounded-full p-2 border-1 border-white bg-gradient-to-r hover:border-gray-rasta hover:from-yellow-rasta hover:to-green-rasta"
                >
                  {item.icon}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
