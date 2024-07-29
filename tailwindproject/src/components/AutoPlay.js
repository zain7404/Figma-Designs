import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elips from "../Images/Ellipse 1.png"



function AutoPlay() {

    const items = [
        {
            id: 1,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 2,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 3,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 4,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        },
        {
            id: 5,
            image: elips,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
            heading: "Dave Beech",
            Post: "Manager"
        }

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [

            {
                breakpoint: 1071,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"

    //     ,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 942,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 669,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };




    return (

        <>
            <div className="container lg mx-auto py-4 px-6" style={{ maxWidth: "1160px" }} >
                <h1 className=" heading text-center font-bold heading pt-20	text-5xl pb-12 " style={{ color: "#007AFF" }} >CLIENTS REVIEW</h1>
                <div className="slider-container">
                    <div className=" review_slider mx-auto  " >
                        <Slider className="" {...settings}>
                            {items.map((item) => {
                                return (
                                    <div className="zain">
                                        <div className="review_slider_card px-4 py-7 " >
                                            <p>{item.title}</p>
                                            <div className="part flex items-center my-4  " >
                                                <div className="mx-4 ml-0 ">
                                                    <img src={item.image} height="80px" width="80px" />
                                                </div>
                                                <div>
                                                    <h1 className="font-bold" >{item.heading}</h1>
                                                    <p>{item.Post}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}


                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AutoPlay;
