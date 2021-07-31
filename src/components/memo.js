import { memo, useState } from "react";

const Child = memo(  (params) => {
    console.log("I'm rendering");
    return <h6> I'm a child component... Check your log in dev tools to see that i only render once at the beginning...</h6>
})

export function AppMemo() {
    const [locaValue, setLocalValue] = useState(0);
    
    return(
        <div>
            <Child/>
            <button onClick={() => setLocalValue(locaValue +1)}> + </button>
            {locaValue}
        </div>
    )
}

export default AppMemo;