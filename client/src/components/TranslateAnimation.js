import React , { useEffect , useRef, useState } from "react";
import Typed from 'typed.js'


const Chevron = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[13px] w-[13px]]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
};
const Exchange = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
        </svg>
    );
};

const GoogleSVG = ()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 998.1 998.3" className="absolute w-10 h-10 top-1/4 -right-[22px]">
            <path fill="#DBDBDB" d="M931.7 998.3c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4H283.6l260.1 797.9h388z" />
            <path fill="#DCDCDC" d="M931.7 230.4c9.7 0 18.9 3.8 25.8 10.6 6.8 6.7 10.6 15.5 10.6 24.8v667.1c0 9.3-3.7 18.1-10.6 24.8-6.9 6.8-16.1 10.6-25.8 10.6H565.5L324.9 230.4h606.8m0-30H283.6l260.1 797.9h388c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4z" />
            <polygon fill="#4352B8" points="482.3,809.8 543.7,998.3 714.4,809.8" />
            <path fill="#607988" d="M936.1 476.1V437H747.6v-63.2h-61.2V437H566.1v39.1h239.4c-12.8 45.1-41.1 87.7-68.7 120.8-48.9-57.9-49.1-76.7-49.1-76.7h-50.8s2.1 28.2 70.7 108.6c-22.3 22.8-39.2 36.3-39.2 36.3l15.6 48.8s23.6-20.3 53.1-51.6c29.6 32.1 67.8 70.7 117.2 116.7l32.1-32.1c-52.9-48-91.7-86.1-120.2-116.7 38.2-45.2 77-102.1 85.2-154.2H936v.1z" />
            <path fill="#4285F4" d="M66.4 0C29.9 0 0 29.9 0 66.5v677c0 36.5 29.9 66.4 66.4 66.4h648.1L454.4 0h-388z" />
            
            <path fill="url(#a)" d="M534.3 200.4h397.4c36.5 0 66.4 29.4 66.4 65.4V666L534.3 200.4z" />
            <path fill="#EEEEEE" d="M371.4 430.6c-2.5 30.3-28.4 75.2-91.1 75.2-54.3 0-98.3-44.9-98.3-100.2s44-100.2 98.3-100.2c30.9 0 51.5 13.4 63.3 24.3l41.2-39.6c-27.1-25-62.4-40.6-104.5-40.6-86.1 0-156 69.9-156 156s69.9 156 156 156c90.2 0 149.8-63.3 149.8-152.6 0-12.8-1.6-22.2-3.7-31.8h-146v53.4l91 .1z" />
            
            <path fill="url(#b)" d="M931.7 200.4H518.8L454.4 0h-388C29.9 0 0 29.9 0 66.5v677c0 36.5 29.9 66.4 66.4 66.4h415.9l61.4 188.4h388c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4z" />
        </svg>
    )
}

const Text = ({ text, isRight }) => {
    const textRef = useRef();
    const [count , setCount] = useState(0)
    useEffect(()=>{
        const currentText = text[count % (text.length)]
        const typed = new Typed(textRef.current , {
            strings: [currentText],
            startDelay: 500,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1250,
            loop: true,
            onLastStringBackspaced: ()=> setCount(e=> e+1),
        })

        return ()=>{
            typed.destroy();
        }
    },[text , count])

    return (
        <div className="w-full h-full bg-white flex flex-col space-y-3">
            <div className="flex items-center justify-between h-10 border-[1.5px] px-3 py-3 rounded-md">
                <span className="text-sm text-indigo-700">{isRight ? 'Thai' : 'English'}</span>
                <Chevron />
            </div>
            <section
                className="rounded-lg h-full px-3 py-2 text-2xl text-gray-500 font-medium"
                style={{
                    backgroundColor: isRight ? "rgb(249 250 249)" : "#fff",
                }}
            >
                <span ref={textRef} ></span>
            </section>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <div className="w-full text-[12px] text-gray-500 flex items-center space-x-3">
                <div className="h-[1px] w-full bg-gray-300 "></div>
                <span className="whitespace-nowrap">
                    Open in Google Translate
                </span>
                <div className="w-[3px] h-[3px] bg-gray-500 shrink-0 rounded-full"></div>
                <span>Feedback</span>
            </div>
        </>
    );
};

export default function TranslateAnimation() {


    return (
        <div className=" relative flex flex-col p-4 space-y-2 rounded-md bg-white shadow w-[80%]  mx-auto lg:ml-20">
            {/* <GoogleSVG/> */}
            <div className="flex items-start space-x-3 w-full h-[200px] ">
                <Text text={["Dog" , "Balloon" , "Grape" , "Rice" , "Harmony"]}  />
                <Exchange />
                <Text text={["หมา" , "ลูกโป่ง" , "องุ่น" , "ข้าว" , "สามัคคี"]} isRight={true} />
            </div>
            <Footer />
        </div>
    );
}
