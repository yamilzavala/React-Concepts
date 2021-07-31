import { useEffect, useState } from "react";

export function AppUseSpecificValue() {
    const [value, setValue] = useState(0);

    useEffect(() => {
       console.log('You have been update the state value!');
    }, [value]);

    return(
        <div>
            <button onClick={() => setValue(value +1)}> + </button>
            {value}
        </div>
    )
}

export default AppUseSpecificValue;