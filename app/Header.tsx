import Link from "next/link"
import React from "react"

function Header() {
  return (
    <div className="bg-[#fbbbc9] border-b-2 border-[#faa8b9]">
      <div className="flex items-center justify-around p-5 text-4xl font-amatic">
        <Link href="/" className="transition duration-500 hover:scale-110">
          Home
        </Link>
        <Link href="/portfolio" className="transition duration-500 hover:scale-110">
          My Art
        </Link>
        <Link href="/about_me" className="transition duration-500 hover:scale-110">
          About Me
        </Link>
        <Link href="/contact_me" className="transition duration-500 hover:scale-110">
          Contact Me
        </Link>
        <Link href="/" className="transition duration-500 hover:scale-110">
          Store
        </Link>
      </div>
    </div>
  )
}

export default Header
