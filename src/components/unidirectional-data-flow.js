import {useState} from 'react';

export default function UnidirectionalDataFlow () {
    const [data, setData] = useState('');

    function handleChange(e) {
        setData(e.target.value)
    }

    return(
        <>
            <input value={data} onChange={e => handleChange(e)} />
            <p><strong>State data: </strong>{data}</p>
        </>
    );
}

