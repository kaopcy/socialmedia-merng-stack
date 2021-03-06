import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";

const logos = [
    {
        name: "TASK",
        backgroundImage: "linear-gradient(to bottom right, #b1359d , #3b82f6",
    },
    {
        name: "VOCAB",
        backgroundImage: "linear-gradient(to top right, #e86e47 , #b1359d",
    },
];

const AnimateLogo = () => {
    const height = 150;
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        const logoName = document.querySelectorAll(".logo-name");

        gsap.set(logoName, {
            y: (y) => `${y * height}px`,
        });

        const run = () => {
            return tl.to(logoName, {
                delay: 1,
                duration: 1,
                y: `+=${height}px`,
                ease: Expo.easeInOut,
                modifiers: {
                    y: gsap.utils.unitize(
                        (y) => parseFloat(y) % (height * logoName.length)
                    ),
                },
            });
        };
        logos.forEach(() => {
            tl.add(run);
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            className="absolute top-0 left-0 w-[100%] overflow-hidden"
            style={{ height }}
        >
            <div
                className="absolute top-0 left-0 w-11 -translate-y-1/2"
                style={{ height: `calc(${height}px*${logos.length})` }}
            >
                {logos.map((logo) => (
                    <div
                        key={logo.name}
                        className="absolute logo-name font-bold text-gray-900 leading-none tracking-wide text-transparent bg-clip-text"
                        style={{
                            backgroundImage: logo.backgroundImage,
                            fontSize: `${(height * 83) / 100}px`,
                        }}
                    >
                        {logo.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimateLogo;
