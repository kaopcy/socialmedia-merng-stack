import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
// import { isMobile } from 'react-device-detect'

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
    // console.log(`ismobile: ${isMobile}`);
    useEffect(() => {
        gsap.to("body", { duration: 0, css: { visibility: "visible" } });
    }, []);
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
