import React from 'react'
import Clock from "../Images/pngegg.png"
import Excel from "../Images/pngegg (1).png"
import Graph from "../Images/pngegg (2).png"
import LinkedIn from "../Images/pngegg (6).png"
import Skype from "../Images/pngegg (7).png"
import Hooks from "../Images/pngegg (5).png"
const Webhooks = () => {

    const items = [{
        id: 1,
        image: Clock,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    {
        id: 2,
        image: Excel,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    {
        id: 3,
        image: Graph,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    {
        id: 4,
        image: Skype,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    {
        id: 5,
        image: Hooks,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    {
        id: 6,
        image: LinkedIn,
        title: "Webhooks",
        text: "Automatically map sales and call data into your CRM fields.",

    },
    ]
    return (
        <>
            <div>
                <h1 className="text-center font-bold heading 	text-5xl" style={{ color: "#007AFF" }} >INTEGRATE WITHE EASE</h1>
                <p className='my-6' style={{ textAlign: "center", fontSize: "18px", fontWeight: "500" }} >We plug seamlessly into the tools you
                    use everyday.</p>
            </div>
            <div className="container lg mx-auto py-4 works ">
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
    );
}

export default Webhooks
