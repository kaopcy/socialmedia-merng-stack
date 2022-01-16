import { useEffect, useState } from "react";

export default function useTestHook(name) {
    const [isMobile, setIsMobile] = useState(false);
    const [render, setRender] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setRender((e) => e + 1);
            console.log('rerendered');
        }, 1000);
    }, []);

    return { isMobile };
}
