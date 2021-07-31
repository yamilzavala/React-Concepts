import { useMemo, useState } from "react";

export function AppUseMemo() {
    const [localValue, setLocalValue] = useState(0);

    const numbers = [1,3,4,5,6,7,8,9];

    const largestNumber = () => {
        console.log("I'm working...");
        return Math.max(...numbers)
    };
    
    const onlyExecutedWhenChange = useMemo(largestNumber, []);
    
    return(
        <div>
            <h6>Check that the largestNumber render when is necesary.. not for each increment in the '+'</h6>
            <button onClick={() => setLocalValue(localValue +1)}> + </button>
            {localValue}
            <h6>Largest number: {onlyExecutedWhenChange}</h6>
        </div>
    )
}

export default AppUseMemo;