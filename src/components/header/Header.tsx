import Image from 'next/image';
import React from 'react';
import logo from "../../images/logo.png"
import { SlLocationPin } from "react-icons/sl";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import cartIcon from "../../images/cartIcon.png"
import Link from 'next/link';

const Header = () => {
    return (
        <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 '>
            <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
                <Link href={'/'} className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] '>
                    <Image className='w-28 mt-1 object-cover' src={logo} alt='logoImg' />
                </Link>
                {/* deliver */}
                <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
                    <SlLocationPin />
                    <div className='text-xs'>
                        <p>Deliver to</p>
                        <p className='text-white font-bold uppercase'>USA</p>
                    </div>
                </div>
                {/* search bar */}
                <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                    <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow' type="text" placeholder='Search products' />
                    <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
                        <HiOutlineSearch />
                    </span>
                </div>
                {/* sign in */}
                <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                    <p>Hello, sign in</p>
                    <p className='text-white font-bold flex items-center'>Account & Lists{" "}
                        <span>
                            <BiCaretDown />
                        </span>
                    </p>
                </div>
                {/* favorite */}
                <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                    <p>Marked</p>
                    <p className='text-white font-bold flex items-center'>& Favorite
                    </p>
                </div>
                {/* cart */}
                <Link href={'/cart'} className='flex  items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative'>
                    <Image
                        className='w-auto object-cover h-8' src={cartIcon} alt='cartImg'
                    />
                    <p className='text-xs text-white font-bold mt-3'>Cart</p>
                    <span className='absolute text-amazon_yellow text-sm top-2 left-[30px] font-semibold'>0</span>
                </Link>

            </div>
        </div>
    );
};

export default Header;