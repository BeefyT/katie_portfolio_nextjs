import "../styles/globals.css"

import React from "react"
import Link from "next/link"

function Home() {
  return (
    <div className="w-full h-full">
      {/* BANNER */}
      <div className="bg-white border-b-4 border-[#faa8b9] rounded-t-md">
        <div className="relative">
          <div className="absolute w-1/4 m-10 text-center right-40 text-9xl font-amatic">
            Kitty's Portfolio
          </div>
          <img className="object-cover rounded-md" src="/banner.jpg" alt={"banner"} />
        </div>
      </div>
      {/* BODY */}
      <div className="relative">
        <div className="flex justify-center p-5 bg-[#fbbbc9]">
          <div className="grid w-full grid-cols-5 gap-5 p-5 lg:grid-cols-5 sm:grid-cols-2">
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_1.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_1.png"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_3.jpg"
              alt={"hello"}
            />

            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_6.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_7.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_8.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_13.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_14.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_1.jpg"
              alt={"hello"}
            />
            <img
              className="object-cover w-full h-full transition duration-1000 hover:scale-105 "
              src="/image_6.jpg"
              alt={"hello"}
            />
          </div>
        </div>
        <Link
          href="/portfolio"
          className=" flex justify-center transition duration-1000 hover:scale-150 shadow-md absolute w-[300px] h-[100px] z-10 top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-full border-[#fa8aa0] items-center"
        >
          <div className="text-4xl font-amatic">View my Art</div>
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-around  h-[1000px] p-5 font-amatic bg-[#faa8b9]">
          <img
            className="object-fill rounded-full h-[800px] w-[800px]"
            src="/image_6.jpg"
            alt={"banner"}
          />
          <div className="p-5 space-y-10">
            <div className=" text-8xl">Hey I'm Kitty</div>
            <div className="text-6xl">
              This is a bunch of filler text to fill in later with a nice bio of what katie wants to
              say
            </div>
            <div>
              <Link href="/about_me" className="">
                <div className="flex justify-center items-center text-5xl font-amatic duration-1000 hover:scale-150 shadow-md w-[300px] h-[100px] bg-white border-2 rounded-full border-[#fa8aa0]">
                  About Me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
