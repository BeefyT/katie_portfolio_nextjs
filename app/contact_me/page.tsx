"use client"

import React, { useState } from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailIcon,
  EmailShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share"

const ContactMe: React.FunctionComponent = (props) => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const sendMail = () => {
    const mailto: string = "mailto:tthatch93@gmail.com?subject=Test subject&body=Body content"
    window.location.href = mailto
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Sending")
    let data = {
      name,
      email,
      message,
    }

    fetch("/api/contact.js", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received")
      if (res.status === 200) {
        console.log("Response succeeded!")
        setSubmitted(true)
        setName("")
        setEmail("")
        setMessage("")
      }
    })
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
            <div>
              <form className="flex flex-col items-center justify-center w-full mb-10 space-y-4 font-amatic">
                <div className="flex flex-col">
                  <label className="text-xl text-left" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-10 text-xl w-[700px]"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="h-10 text-xl w-[700px]"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xl text-left">
                    Commission Details
                  </label>
                  <textarea
                    name="message"
                    className="text-xl h-36 w-[700px]"
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                  />
                </div>
                <input
                  type="submit"
                  className="px-5 py-3 text-4xl text-center text-black bg-white rounded-lg font-amatic sm:w-fit"
                  onClick={(e) => {
                    handleSubmit(e)
                  }}
                />
              </form>
            </div>
            <div>
              <div className="pb-4 text-4xl font-bold text-center font-amatic">
                Or contact me on social media!
              </div>
              <div className="flex items-center justify-center w-full space-x-4">
                <FacebookShareButton url={"http://localhost:3000"}>
                  <FacebookIcon size={80} round />
                </FacebookShareButton>
                <LinkedinShareButton url={"http://localhost:3000"}>
                  <LinkedinIcon size={80} round />
                </LinkedinShareButton>
                <TwitterShareButton url={"http://localhost:3000"}>
                  <TwitterIcon size={80} round />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactMe
