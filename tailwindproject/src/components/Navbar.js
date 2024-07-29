import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div style={{ background: "#007AFF" }} className="  py-3"  >
                <div className="container xl mx-auto bg-bermuda px-6 ">
                    <div className="grid grid-cols-6 gap-4 mx-1 " >
                        <div className="col-start-1 col-end-3" >
                            <p className="font-semibold	text-lg text-white		" >855.371.0722</p>
                        </div>
                        <div className="  col-end-10    col-span-2 flex justify-end" >
                            <div style={{ background: "white", borderRadius: "50%" }} className="mx-2 border-radius: 9999px flex justify-center items-center
                    size-6	 "> <FaYoutube style={{ color: "#007AFF" }} /></div>

                            <div style={{ background: "white", borderRadius: "50%" }} className="mx-2 size-6 flex justify-center items-center	 " ><FaFacebookF style={{ color: "#007AFF" }} /></div>
                            <div style={{ background: "white", borderRadius: "50%" }} className="mx-2 size-6	flex justify-center items-center " >
                                <FaInstagram style={{ color: "#007AFF" }} />
                            </div>
                            <div style={{ background: "white", borderRadius: "50%", width: "24px", height: "24px" }} className="mx-2  flex justify-center items-center	 " >
                                <FaLinkedinIn style={{ color: "#007AFF" }} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <nav>
                <div className="container flex  items-center justify-between mx-auto py-4 px-6" style={{
                    paddingLeft: "26px"
                }} >
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">

                        <span className="self-center text-2xl  whitespace-nowrap dark:text-white font-bold logo " style={{ color: "#007AFF", fontSize: "32px" }} >Logo</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <span className="self-center text-2xl  whitespace-nowrap dark:text-white font-bold mr-2 " style={{ color: "#007AFF", fontSize: "14px" }} >Login</span>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pricing " style={{ borderRadius: "50px" }} >Plan & Pricing</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li className='navbar' style={{ margin: "0 15px", fontSize: "16px" }} >
                                <a href="#" className="text-black" aria-current="page">Home</a>
                            </li>
                            <li className='navbar' style={{ margin: "0 15px", fontSize: "16px" }}>
                                <a href="#" className="text-black">About</a>
                            </li>
                            <li style={{ margin: "0 15px", fontSize: "16px" }} className='navbar' >
                                <a href="#" className=" text-black">Industries</a>
                            </li>
                            <li style={{ margin: "0 15px", fontSize: "16px" }} className='navbar' >
                                <a href="#" className="text-black">How it Works</a>
                            </li>
                            <li style={{ margin: "0 15px", fontSize: "16px" }} className='navbar' >
                                <a href="#" className="text-black">Why</a>
                            </li>
                            <li style={{ margin: "0 15px", fontSize: "16px" }} className='navbar' >
                                <a href="#" className="text-black">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >


        </>
    )
}

export default Navbar
