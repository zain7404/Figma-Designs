import React from 'react'
import Group43 from "../Images/Group 43.png";


const HowweSound = () => {
    return (
        <div style={{ position: "relative" }} >
            <div className="sound" >
                <div className="container dummy mx-auto">
                    <div className="group43_image">
                        <img src={Group43} alt="" />
                    </div>

                    <form className="form_first" >

                        <h1 className="  font-bold heading my-5	text-5xl" style={{ color: "#007AFF" }} >HERE HOW WE SOUND</h1>
                        <p className="text-xl font-medium	my-5	" >To hear how we could answer your calls, Enter your
                            details and call us for free.</p>

                        <div class="form-group">
                            <input type="text" id="name" placeholder="Name" />
                            <input type="text" id="email" placeholder="Email Address" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="num" placeholder="Phone Number" />
                            <input type="text" id="company" placeholder="Company Name" />
                        </div>
                        <div>
                            <a href="#"
                                className=" responsive_button inline-block rounded-lg bg-indigo-600 px-8 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 send_one " style={{ borderRadius: "50px", background: "#007AFF", float: "right" }} >
                                Send

                            </a>
                        </div>
                    </form>

                    <div></div>
                </div>
            </div>
        </div>)
}

export default HowweSound
