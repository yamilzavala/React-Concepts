import { useEffect } from "react";

export function AppUseEffect() {

    const handleClickEvent = () => alert('You have been click!');   

    useEffect(() => {
        document.addEventListener('click', handleClickEvent)
        return () => {
            document.removeEventListener('click', handleClickEvent)
        }
    }, []);

    return(
        <div>
            <h6>Hi, i'm using use effect! Click on the document to see the alert!</h6>
        </div>
    )
}

export default AppUseEffect;