import React, { useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./TestSlide.css";

const TestSlide = () => {
    useEffect(() => {
        // const slide = document.querySelectorAll(".slide");
        // const totSlides = slide.length;
        // let slideWidth;
        // let slidesWidth;
        // slideWidth = document.querySelector(".slide").offsetWidth;
        // slidesWidth = slideWidth * totSlides;
        // gsap.set(".slides", {
        //     left: -slideWidth,
        // });
        // for (var i = 1; i <= totSlides; i++) {
        //     gsap.set(slide[i - 1], { x: i * slideWidth });
        // }
        // gsap.from(".slide", {
        //     x: slidesWidth,
        //     ease: Linear.easeNone,
        //     repeat: -1,
        //     duration: 10,
        //     modifiers: {
        //         x: function (x) {
        //             x = parseInt(x) % slidesWidth
        //            return `${x}px`
        //         },
        //     },
        // });
    }, []);

    return (
        <div className="slider">
            <div className="slides">
                <div className="slide" style={{ backgroundColor: "red" }}></div>
                <div
                    className="slide"
                    style={{ backgroundColor: "blue" }}
                ></div>
                <div
                    className="slide"
                    style={{ backgroundColor: "pink" }}
                ></div>
                <div
                    className="slide"
                    style={{ backgroundColor: "green" }}
                ></div>
                <div
                    className="slide"
                    style={{ backgroundColor: "yellow" }}
                ></div>
            </div>
        </div>
    );
};

export default TestSlide;
