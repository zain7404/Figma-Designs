import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Question = () => {

    const accordionData = [
        {
            title: 'What is a 24/7 call answering service?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
        },
        {
            title: 'How should a call answering service answer my calls?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Who is answering my phone and website chats?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'How much does an answering service cost? Is billing...',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`
        }
    ];

    const [isActive, setIsActive] = useState(false);
    return (
        <div className="LiveChat my-28 py-12  " style={{ background: "none" }}>
            <div className="container Convert mx-auto">
                <div className="block content">
                    <p className="text-xl font-normal	my-4 mb-0	">
                        EVERY QUESTION AS AN ANSWER
                    </p>
                    <h1
                        className="  font-bold heading my-5	text-5xl"
                        style={{ color: "#007AFF" }}
                    >
                        Frequently Asked
                        Questions{" "}
                    </h1>
                    <p className="text-xl font-normal	my-5 mt-0	">
                        From smarter software to specialized agent training,
                        our multi-channel expertise encourages.                         </p>

                </div>
                <div></div>

                <div className="accordians  " style={{ position: "Relative", width: "50%", margin: "auto" }} >

                    <div>
        
                        {accordionData.map((item) => (

                            <Accordion>
                                <div className="accordion-item">
                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                        <div>{item.title}</div>
                                        <div>{isActive ? '-' : '+'}</div>
                                    </div>
                                    {isActive && <div className="accordion-content">{item.content}</div>}
                                </div>
                            </Accordion>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Question
