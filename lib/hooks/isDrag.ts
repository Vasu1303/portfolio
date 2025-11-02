import { useEffect, useState } from "react"

export const useDragHint = ()=>{
    const [hasBeenDragged, setHasBeenDragged] = useState(false);
    const [showHint, setShowHint] = useState(true);

    useEffect(()=>{
        const draggedBefore = localStorage.getItem('terminalDragged');
        setHasBeenDragged(!!draggedBefore);

        if(!draggedBefore){
            const timer = setTimeout(()=>setShowHint(true), 2000);
            return () => clearTimeout(timer);
        }


    }, []);

    const markAsDragged = () => {
        localStorage.setItem('terminalDragged', 'true');
        setHasBeenDragged(true);
        setShowHint(false);
    };

    return {
        showHint, markAsDragged
    };
}