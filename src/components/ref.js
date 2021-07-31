import { useRef, useEffect } from "react";


export default function RefComponent() {
    const inputNode = useRef();

    useEffect(() => {
        inputNode.current.focus()
    }, []);

    return(
        <div>
            <input ref={inputNode} type="text"/>
        </div>
    )
}