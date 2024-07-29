import React from 'react'
import clockImage from "../Images/clock.png";

const WhyitWorks = () => {
    const items = [{
        id: 1,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    {
        id: 2,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    {
        id: 3,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    {
        id: 4,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    {
        id: 5,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    {
        id: 6,
        image: clockImage,
        title: "Always Available",
        text: "Never Miss an Opportunity when client calls.",

    },
    ]
    return (
        <>
            <div>
                <h1 className="text-center font-bold heading pt-20 mt-10	text-5xl" style={{ color: "#007AFF" }} >WHY IT WORKS</h1>
            </div>
            <div className="container lg mx-auto py-20 works ">
                {items.map((item) => {
                    return (

                        <div className="ClockClass flex justify-center flex-col items-center px-4 py-7" >
                            <div >

                                <img src={item.image} width="100px" height="100px" alt="" />

                            </div>
                            <div >
                                <h2 className="font-bold text-lg my-3">{item.title}</h2>
                                <p className="text-lg my-3" >{item.text}</p>
                            </div>

                        </div>

                    );
                })}
            </div>
        </>

    )
}

export default WhyitWorks
