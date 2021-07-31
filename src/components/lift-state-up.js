import { useState } from "react";

function ShowList (props) {
    return(
       props.value.map(i => <h6>{i}</h6>) 
    );
}

function ShowCountList (props) {
    return(
        props.count
    );
}

export default function LiftStateUp () {
    const [items, setItems] = useState(['Fo', 'fa', 'fe', 'fi']);

    return(
        <>
            Items:
            <ShowList value={items}/>
            Count list items:
            <ShowCountList count={items.length}/>
        </>
    )

} 