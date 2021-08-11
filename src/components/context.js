import {createContext, useContext} from 'react';
const Context = createContext();

function Child(props) {
    return <GrandChild/>
}

function GrandChild(props) {
    const context = useContext(Context);
    return <h1>{context}</h1>
}

export default function ContextComponent() {    
   
    return  (
        <Context.Provider value={'Yamil'}>
            <Child/>
        </Context.Provider>   
    )
}

export {Context}