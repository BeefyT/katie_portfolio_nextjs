"use client"
import React, { useRef } from "react"
import { useEffect, useState } from "react"
import useOutsideClick from "../../public/useOutsideClick"

function Portfolio() {
  const art = [
    { name: "Test Image 1", id: 1, image: "/image_1.jpg", alt: "test image" },
    { name: "Test Image 2", id: 2, image: "/image_1.png", alt: "test image" },
    { name: "Test Image 3", id: 3, image: "/image_3.jpg", alt: "test image" },
    { name: "Test Image 4", id: 4, image: "/image_6.jpg", alt: "test image" },
    { name: "Test Image 5", id: 5, image: "/image_7.jpg", alt: "test image" },
    { name: "Test Image 6", id: 6, image: "/image_8.jpg", alt: "test image" },
    { name: "Test Image 7", id: 7, image: "/image_13.jpg", alt: "test image" },
    { name: "Test Image 8", id: 8, image: "/image_14.jpg", alt: "test image" },
  ]

  const [selectedPiece, setSelectedPiece] = useState<{
    name: string
    id: number
    image: string
    alt: string
  }>()

  const [isImageViwerActive, setIsImageViwerActive] = useState<boolean>(false)

  return (
    <div className="bg-[#fde6eb]">
      <div className="relative p-5">
        <div className="grid grid-cols-3 gap-4 p-5 lg:grid-cols-3 sm:grid-cols-2">
          {art.map((piece, index) => (
            <img
              onClick={() => {
                setSelectedPiece(piece)
                setIsImageViwerActive(true)
              }}
              key={index}
              className={`object-cover w-full h-full transition duration-1000 hover:scale-100 scale-95 shadow-lg`}
              src={piece.image}
              alt={piece.alt}
            />
          ))}
        </div>
        {/* VIEWER */}
        {isImageViwerActive && (
          <div className="relative">
            <ImageViewer
              isActive={isImageViwerActive}
              setIsActive={setIsImageViwerActive}
              selectedImage={selectedPiece ? selectedPiece : undefined}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio

interface ImageViwerProps {
  selectedImage:
    | {
        name: string
        id: number
        image: string
        alt: string
      }
    | undefined
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageViewer = (props: ImageViwerProps) => {
  const ref = useRef(null)
  useOutsideClick(ref, () => {
    props.setIsActive(false)
  })

  return (
    <div className="fixed z-[100] w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-slate-200/50">
      <div className="absolute z-20 w-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#F996AA] rounded-xl h-5/6 top-1/2 left-1/2 drop-shadow-2xl">
        <div ref={ref} className="flex items-center justify-around w-full h-full">
          <div className="object-cover w-2/3 h-full p-5 rounded-tl-xl rounded-bl-xl">
            {props.selectedImage && (
              <img
                className={`object-scale-down w-full h-full`}
                src={props.selectedImage.image}
                alt={props.selectedImage.alt}
              />
            )}
          </div>
          <div className="flex flex-col w-1/3 h-full p-5 space-y-2 bg-[#fbbbc9] rounded-tr-xl rounded-br-xl">
            <button
              onClick={() => {
                props.setIsActive(false)
              }}
              className="absolute text-4xl font-bold top-3 right-4 font-amatic"
            >
              x
            </button>
            <div className="font-bold text-8xl font-amatic">{props.selectedImage?.name}</div>
            <div className="text-4xl font-amatic">
              This is an image that I drew after watching an episode of my little pony! I was
              wondering what rainbow dash would look like if she was a human and I started drawing
              and came out with this awesome piece!
            </div>
            <div className="grow"></div>
            <div className="flex flex-col items-center justify-center text-4xl font-amatic">
              <div> Want to purchase a copy of this piece? </div>
              <button className=" transition duration-1000 hover:scale-105 shadow-md w-[200px] h-[50px] bg-white border-2 rounded-full border-[#fa8aa0]">
                <div className="text-4xl font-amatic">Buy</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
