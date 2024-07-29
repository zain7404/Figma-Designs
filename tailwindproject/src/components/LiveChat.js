import React from 'react'
import Group51 from "../Images/Group 51.png";

const LiveChat = () => {
    return (
        <div className="LiveChat my-28 ">
            <div className="container Convert mx-auto">
                <div className="block content">
                    <h1
                        className="  font-bold heading my-5	text-5xl"
                        style={{ color: "#007AFF" }}
                    >
                        Live Chat Helps convert your leads{" "}
                    </h1>
                    <p className="text-xl font-medium	my-5	">
                        Your web visitors chat with real people not bots. A personal touch
                        touch makes the difference.
                    </p>
                    <a href="#"
                        className="  inline-block rounded-lg bg-indigo-600 px-7 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 hover:bg-indigo-700 hover:ring-indigo-700  " style={{ borderRadius: "50px", background: "#007AFF" }} >
                        Learn More

                    </a>
                </div>
                <div></div>

                <div className="Image51  " style={{ position: "Relative" }} >
                    <img src={Group51} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LiveChat
