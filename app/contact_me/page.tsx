"use client"

import React from "react"

const ContactMe: React.FunctionComponent = (props) => {
  const sendMail = () => {
    const mailto: string = "mailto:tthatch93@gmail.com?subject=Test subject&body=Body content"
    window.location.href = mailto
  }

  return (
    <div className="space-y-10 ">
      <div className="w-full h-full p-5">
        <div className="flex space-x-10">
          <img
            className="object-fill rounded-full h-[800px] w-[800px]"
            src="/image_6.jpg"
            alt={"banner"}
          />
          <div className="space-y-5">
            <div className="text-center text-9xl font-amatic">Want to commission me?</div>
            <div className="text-4xl font-amatic">Looking for artwork for your book or play?</div>
            <div className="text-4xl font-amatic">Need some character art?</div>
            <div className="pb-4 text-4xl font-amatic">
              Just want an awesome art piece of your favorite anime character?
            </div>
            {/* CONTACT FORM */}
            <div className="flex justify-between">
              <button
                onClick={sendMail}
                type="submit"
                className="px-5 py-3 text-4xl text-center text-black bg-white rounded-lg font-amatic sm:w-fit"
              >
                Send Email
              </button>
              <button
                onClick={sendMail}
                type="submit"
                className="flex px-5 py-3 space-x-3 text-4xl text-black bg-white rounded-lg font-amatic sm:w-fit"
              >
                <div>Contact On</div>
              </button>
              <button
                onClick={sendMail}
                type="submit"
                className="px-5 py-3 text-4xl text-center text-black bg-white rounded-lg font-amatic sm:w-fit"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactMe
