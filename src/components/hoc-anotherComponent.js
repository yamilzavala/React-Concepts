import {useState} from 'react';

export function AddNewBehaviourTwo(props) {   
    const [hovered, setHover] = useState(false);
    return(
        <div onMouseOver={() => setHover(true)}
             onMouseLeave={() => setHover(false)}>
             { props.hovered(hovered) }
        </div>
    )    
}

export function AppHigherOrderComponetTwo (props) {   
    function hovered(hovered) {
        const style = {
            backgroundColor: hovered ? "red" : ""
        }
        return(
            <div style={style}>
                <h6> Hi, i'm a component with new functionality (added with Higher Order Component)</h6>
            </div>
        )
    }

    return <AddNewBehaviourTwo hovered={hovered} />
    
}

export default AppHigherOrderComponetTwo;