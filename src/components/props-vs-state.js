import {useState} from 'react';

function Child(props) {
    return <GrandChild value={props.value}/>
}

function GrandChild(props) {
    return <h1>{props.value}</h1>
}

export default function PropsVsState() {
    const [data, setData] = useState('State from App');
    return (
        <>
            <Child value={data}/>
        </>
    )
}