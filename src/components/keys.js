import {useState} from 'react';

const data = [1,2,3,4,5,6,7,8].map(i => {
   return {
        id: i,
        value: i
    }
});


export default function KeysComponent () {
    const [numbers, setNumbers] = useState(data);
   
    const renderItems = (items) => {
        return items.map((i) => <h1 key={i.id} onClick={() => deleteItem(i.id)}>{i.value}</h1>)
    }
    
    const deleteItem = (idItem) => setNumbers(numbers.filter(i => i.id !== idItem));
   
    return (
        <>
            {renderItems(numbers)}
        </>
    )
}