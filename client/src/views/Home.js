import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import usePreloader from "../composables/usePreloader";
import TranslateAnimation from "../components/TranslateAnimation";
import HomeOverlay from "../components/HomeOverlay";
import AnimateLogo from "../components/AnimateLogo";

const Button = () => {
    return (
        <div className="line relative mt-9 self-end flex overflow-hidden">
            <Link
                as={<div />}
                to={"/"}
                className="header invisible px-4 py-2 rounded-xl text-xl font-semibold bg-gradient-to-br from-fuchsia-700 to to-blue-600 text-white shadow-md  cursor-pointer"
            >
                Launch &rarr;
            </Link>
        </div>
    );
};

const Loader = ({ width, height }) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold bg-gradient-to-br from-purple-300 to-blue-500 text-transparent bg-clip-text flex items-center space-x-5">
            <span>Loading</span>
            <div
                className={`relative rounded-full bg-gradient-to-br from-purple-300 to-blue-500 overflow-hidden  flex items-center justify-center leading-none`}
                style={{ width, height }}
            >
                <span
                    className={`absolute block bg-white animate-spin-slow`}
                    style={{
                        width: width * 1.2,
                        height: (30 / 100) * height,
                    }}
                ></span>
                <span
                    className={`relative block bg-white rounded-full`}
                    style={{
                        width: (70 / 100) * width,
                        height: (70 / 100) * height,
                    }}
                ></span>
            </div>
        </div>
    );
};

const VocabImg = ({ preloader }) => {
    const imageRef = useRef();
    useEffect(() => {
        if (!preloader) {
            gsap.to(imageRef.current, {
                duration: 2,
                x: 0,
            });
        }
    }, [preloader]);
    return (
        <div className="relative w-full h-full overflow-hidden ">
            <img
                ref={imageRef}
                src={require("../assets/images/vocabulary2.jpg")}
                className="absolute h-full max-w-none translate-x-[-100%]"
                alt=""
            />
        </div>
    );
};

const TranslateText = () => {
    return (
        <div className=" w-[80%] self-center lg:w-full h-full flex flex-col space-y-4 tracking-tight leading-[1.4em] py-10 ">
            <div className="flex items-center text-xl lg:text-3xl font-bold text-gray-800 space-x-4">
                <FontAwesomeIcon
                    icon={faBook}
                    className="text-gray-300 text-base lg:text-2xl"
                />
                <h1>Vocabulary</h1>
            </div>
            <p className="text-sm lg:text-base tracking-wide leading-relaxed pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate molestiae incidunt officiis debitis dolorem! Placeat
                ratione quasi rem laborum eius.
            </p>
        </div>
    );
};

const Home = () => {
    const { preloader } = usePreloader();
    const [finishOverlay, setFinishOverlay] = useState(false);
    useEffect(() => {
        const tl = gsap.timeline();
        if (!preloader) {
            gsap.set(".header", {
                visibility: "visible",
            });
            tl.from(".header", {
                duration: 2,
                skewY: 7,
                y: 200,
                ease: "power4.out",
                stagger: {
                    amount: 0.4,
                },
            }).to(".home-overlay", {
                delay: -1,
                duration: 2.1,
                width: 0,
                ease: "strong.inOut",
                stagger: {
                    amount: 1,
                },
                onComplete: () => setFinishOverlay(true),
            });
        }
        return ()=>{
            tl.kill()
            setFinishOverlay(false);
        }
    }, [preloader]);

    return preloader ? (
        <Loader width={30} height={30} />
    ) : (
        <div className="min-h-screen relative flex flex-col lg:flex-row ">
            <div className="relative lg:w-[30%] order-2 lg:order-1">
                <VocabImg preloader={preloader}></VocabImg>
                <HomeOverlay finishOverlay={finishOverlay} />
            </div>
            <div className="relative flex lg:w-[70%] flex-col pb-24 items-center justify-end space-y-20 order-1 mt-48">
                <div className="flex flex-col content-start leading-none items-start">
                    <div className="line relative h-[80px] lg:h-[140px] overflow-hidden">
                        <div className="header invisible text-[80px] lg:text-[140px] bg-gradient-to-br from-purple-600 to-blue-500 text-transparent bg-clip-text font-bold tracking-tight">
                            <span className="opacity-0" >TEXTTT</span>
                            <AnimateLogo/>
                        </div>
                    </div>
                    <div className="line relative h-[18px] lg:h-[32px] overflow-hidden">
                        <div className="header invisible text-gray-500 font-normal text-sm sm:text-lg lg:text-2xl ml-4 tracking-[5px] lg:tracking-[9px]">
                            Better Plan. Better life.
                        </div>
                    </div>
                    {<Button />}
                </div>
                <div className=" self-start w-full flex flex-col lg:flex-row items-center">
                    <div className="relative lg:flex-[5] lg:order-2 flex justify-center">
                        <TranslateText />
                        <HomeOverlay/>  
                    </div>
                    <div className="relative w-full lg:flex-[8] lg:flex-shrink-0">
                        <TranslateAnimation />
                        <HomeOverlay/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
