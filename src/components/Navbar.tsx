import { useState } from 'react'
import Logo from '../assets/check-logo.svg'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import LocationIcon from '../assets/icons/location.svg'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='flex justify-center items-center px-8 py-4 border-b-2'>
            <div className='flex justify-between items-center w-[1400px]'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex mr-4'>
                        <img
                            src={LocationIcon}
                            className='w-4 mr-1'
                        />
                        <h2 className=''>Vancouver, BC</h2>
                    </div>
                    <button className='text-[#636363] border-2 rounded-2xl py-1 px-2'>Contact Us</button>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img
                            className="w-8"
                            src={Logo}
                            alt="Check driving school logo"
                        />
                    </div>
                    <div className="ml-2">
                        <h1 className="text-2xl font-bold uppercase leading-none">Check</h1>
                        <p className="text-sm text-[#636363] leading-none">Driving School</p>
                    </div>
                </div>
                <button
                    className='md:hidden flex items-center border-2 rounded-xl'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img className='w-8' src={HamburgerIcon} />
                </button>
                <div className={`${isMenuOpen ? "block absolute top-16 left-0 w-full pl-8 py-2 bg-white shadow-md text-[#636363]" : "hidden"} md:static md:w-auto md:block md:shadow-none`}>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <h2 className='text-base lg:text-md mr-6 hover-pulse'>Home</h2>
                        <h2 className='text-base lg:text-md mr-6 hover-pulse'>About</h2>
                        <h2 className='text-base lg:text-md mr-6 hover-pulse'>Program Outline</h2>
                        <h2 className='text-base lg:text-md hover-pulse'>Company Policy</h2>
                    </div>
                </div>
            </div>
        </nav>
    )
}
