import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoSearchSharp } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti"
import yt_logo from "../images/yt-logo2.png"

const Navbar = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className='gap-4 items-center flex'>
            <GiHamburgerMenu className='max-w-[600px]'/>
            <a href="/">
            <img className='h-6' src={yt_logo} />
            </a>
        </div>

        <div>
            <form >
            <div className="flex flex-grow max-w-[800px] ">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                    />
                    <button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                    <IoSearchSharp />
                    </button>
                    <button className="py-2 px-4 rounded-r-full">
                    <TiMicrophone />
                    </button>
                </div>
            </form>
        </div>
        <div></div>
    </div>
  )
}

export default Navbar
