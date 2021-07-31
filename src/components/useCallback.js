import { memo, useState, useCallback } from "react";

const Child = memo(  (params) => {
    console.log("I'm rendering");
    return <h6> I'm a child component... Check your log in dev tools to see that <br/> i only render when the function change...</h6>
})

export function AppUseCallback() {
    const [localValue, setLocalValue] = useState(0);

    const someFunction = () => {};
    const onlyExecutedWhenChange = useCallback(someFunction, []);
    
    return(
        <div>
            <Child func={onlyExecutedWhenChange}/>
            <button onClick={() => setLocalValue(localValue +1)}> + </button>
            {localValue}
        </div>
    )
}

export default AppUseCallback;