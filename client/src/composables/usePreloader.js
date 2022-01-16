import { useState, useEffect, useRef } from "react";

export default function usePreloader() {
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(1);

    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    useEffect(() => {
        id.current = setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (timer === 0) clear();
    }, [timer]);

    return { preloader, timer };
}
