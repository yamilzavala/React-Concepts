import {useState} from 'react';

const data = [];

for (let index = 0; index < 10; index++) {
    data.push(
        {
            id: `id_${index}`,
            value: index
        }
    );    
}

function Items(props) {
    return props.items.map((i) => <h1 key={i.id} onClick={() => props.delete(i.id)}>{i.value}</h1>)
}

export default function KeysComponentTwo () {
    const [items, setItems] = useState(data);   
        
    const deleteItem = (idItem) => setItems(items.filter(i => i.id !== idItem));
   
    return  <Items delete={deleteItem} items={items}/>           
}