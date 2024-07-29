import React from 'react'

const Hero = () => {
    return (
        <div className="relative px-6 lg:px-8 hero_section "  >
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40 px-6 ">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
                            The Answer is Connecting.                            </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
                            Keep Your Business Human with <br />
                            24/7* Live Answering.
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center contact_one">
                            <a href="#"
                                className="  inline-block rounded-lg bg-indigo-600 px-8 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 contact_one " style={{ borderRadius: "50px", background: "#007AFF" }} >
                                Contact Us

                            </a>
                            <a href="#"
                                className=" contact_one inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20 plans" >
                                Plan & Pricing

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
