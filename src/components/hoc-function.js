import {useState} from 'react';


export function addNewBehaviour(Component) {
    return function (props) {
        const [hovered, setHover] = useState(false);
        return(
            <div onMouseOver={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}>
                 <Component hovered={hovered} {...props}/>
            </div>
        )
    }
}

export function AppHigherOrderComponet (props) {
    const style = {
        backgroundColor: props.hovered ? "red" : ""
    }

    return(
        <div style={style}>
            <h6> Hi, i'm a component with new functionality (added with Higher Order Component)</h6>
        </div>
    )
}

export default addNewBehaviour(AppHigherOrderComponet)