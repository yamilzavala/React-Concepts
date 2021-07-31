import {useState, useEffect, useRef} from 'react';


export function AppCustomHook () {   
  const [hoverRef, hovered] = useHover()

  const style = {
    backgroundColor: hovered ? "red" : ""
  }
        
  return(
    <div ref={hoverRef} style={style}>
        <h6> Hi, i'm a custom component</h6>
    </div>
  )
}

function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    function onMouseOver () { setValue(true)} 
    function onMouseOut () { setValue(false)} 

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', onMouseOver);
            node.addEventListener('mouseout', onMouseOut);

            return() => {
                node.removeEventListener('mouseover', onMouseOver);
                node.removeEventListener('mouseout', onMouseOut);
            }
        }
    },[]);

    return [ref, value];
}

export default AppCustomHook;