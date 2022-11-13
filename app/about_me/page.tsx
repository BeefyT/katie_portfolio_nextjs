import React, { useState, useRef } from "react"
import art3 from "../assets/images/image_6.jpg"

const AboutMe: React.FunctionComponent = (props) => {
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
            <div className="text-center text-8xl font-amatic">
              Hey I'm Kitty, come get to know me!
            </div>
            <div className="text-4xl font-amatic">
              Kitty here! I've been drawing from the day I first learned to hold a pencil, and
              through that I found my passion of designing characters. Anything living! I feel in
              love with capturing people and animals, and putting my own little stylistic twist on
              them. Hope you enjoy my art as much as I love making it!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe
