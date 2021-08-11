import {createContext, useContext, useState} from 'react';
const Context = createContext();

function Child(props) {
    return <GrandChild/>
}

function GrandChild(props) {
    const context = useContext(Context);
    return <h1>{JSON.stringify(context)}</h1>
}

export default function ContextComponent() {    
    const [data, setData] = useState({nombre: 'yamil', apellido: 'zavala'});
    return  (
        <Context.Provider value={data}>
            <Child/>
        </Context.Provider>   
    )
}

export {Context}