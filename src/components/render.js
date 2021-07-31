import {useState} from 'react';

export function DetectHover(props) {   
    const [hovered, setHover] = useState(false);
    return(
        <div onMouseOver={() => setHover(true)}
             onMouseLeave={() => setHover(false)}>
             { props.render(hovered) }
        </div>
    )    
}

export function AppRender (props) {   
    function renderF(hovered) {
        const style = {
            backgroundColor: hovered ? "red" : ""
        }
        return(
            <div style={style}>
                <h6> Hi, i'm a component with new functionality (added with Higher Order Component)</h6>
            </div>
        )
    }

    return <DetectHover render={renderF} />
    
}

export default AppRender;