import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
// import { isMobile } from 'react-device-detect'

import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import Post from "./views/Post/Post";
import Feed from "./views/Post/Feed";
import Friend from "./views/Post/Friend";

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
                <Route path={"/post"} element={<Post />} >
                    <Route index element={<Feed/>} />
                    <Route path={'feed'} element={<Feed/>} />
                    <Route path={'friend'} element={<Friend/>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
