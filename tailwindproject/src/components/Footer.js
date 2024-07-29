import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (

        <footer>


            <div className="container flex justify-between position " style={{ background: "white", maxWidth: "1160px", width: "90%", margin: "auto", padding: " 40px 38px", }} >
                <div className='Join' style={{ width: "35%" }} >
                    <h2 className="  font-bold heading	text-xl"
                        style={{ color: "#007AFF" }} >Join Our Newsletter</h2>
                    <p style={{ fontSize: "14px", color: "#858585" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore</p>
                </div>

                <div className="Sub flex flex-nowrap " style={{ width: "40%" }} >
                    <div data-style="clean" class="flex items-end mb-3">
                        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                        <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                            <div class="relative w-full mr-0formkit-field">
                                <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                                    </svg>
                                </div>
                                <input id="member_email" class="formkit-input myClass bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email_address" aria-label="Email Address" placeholder="Your email address..." required="" type="email" />
                            </div>
                            <button data-element="submit" class="formkit-submit">
                                <div class="formkit-spinner">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <span class=" button px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="main_1">
                <div class="contentWrapper_1">
                    <div class="item1">
                        <h2 className="font-bold" style={{ marginBottom: "10px", fontSize: "28px", fontWeight: "700" }} >
                            <a href="#" >Logo</a>
                        </h2>

                        <p style={{ color: "#FFFFFFCC" }} >Lorem ipsum dolor sit amet, consectectur
                            adipiscing elit, sed do eiusmod tempor</p>
                        <div class="socialicons mt-5 ">
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
                    <div class="item2">
                        <h2 style={{ width: "45%", borderBottom: "2px solid #007AFF", textWrap: "nowrap" }} >Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Services
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Industries
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> How it works
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Why
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="item3">
                        <h2 style={{ width: "45%", borderBottom: "2px solid #007AFF", textWrap: "nowrap" }} >Useful Link</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Privacy & Policy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Term & Condition
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Disclamer
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> Support
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-chevron-right mr-2"></span> FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="item4">
                        <h2 style={{ width: "40%", borderBottom: "2px solid #007AFF", textWrap: "nowrap" }} >Work Hours</h2>
                        <ul>
                            <li>
                                <a href="# " className="font-bold" >
                                    <span class="fa fa-chevron-right mr-2"></span> 9 AM - 5 PM , Monday - Saturday
                                </a>
                            </li>
                            <p style={{ color: "#FFFFFFCC" }} >Lorem ipsum dolor sit amet, consectectur
                                adipiscing elit, sed do eiusmod tempor</p>


                            <div>
                                <a href="#"
                                    className="  inline-block rounded-lg bg-indigo-600 my-10 px-8 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 hover:bg-indigo-700 hover:ring-indigo-700 contact_one " style={{ borderRadius: "50px", background: "#007AFF", color: "white" }} >
                                    Call Us

                                </a>

                            </div>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer
