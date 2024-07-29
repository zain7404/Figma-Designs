import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyitWorks from "./components/WhyitWorks";
import HowweSound from "./components/HowweSound";
import AutoPlay from "./components/AutoPlay";
import LiveChat from "./components/LiveChat";
import Webhooks from "./components/Webhooks";
import Real from "./components/Real";
import Question from "./components/Question";


import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Accordion from "./components/Accordian";
const App = () => {



    return (
        <>
            <Navbar />
            <Hero />
            <WhyitWorks />
            <HowweSound />
            <AutoPlay />
            <LiveChat />
            <Webhooks />

            <Real />


            <Question />


            <Pricing />


            <Footer />



        </>
    );
};

export default App;
