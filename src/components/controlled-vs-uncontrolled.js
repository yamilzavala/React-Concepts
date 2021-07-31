import { useState, useRef } from "react";


function Controlled() {
    const [data, setData] = useState('');

    function showAlert() {
        alert(data)
    }

    return(
        <div>
            <input type="text"  value={data} onChange={e => setData(e.target.value)}/>
            <button onClick={showAlert}>Click me</button>
        </div>
    )
}

function Uncontrolled() {   
    const data = useRef();

    function showAlert() {
        alert(data.current.value)
    }

    return(
        <div>
            <input type="text" ref={data}/>
            <button onClick={showAlert}>Click me</button>
        </div>
    )
}

export default function ControlledVsUncontrolled() {
    
    return(
        <>
            Uncontrolled:
            <Uncontrolled/>
            Controlled:
            <Controlled/>
        </>
    )
}