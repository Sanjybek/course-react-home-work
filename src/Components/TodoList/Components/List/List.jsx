import React from 'react';

const List = React.memo(({arr, delet, startEditing}) => {
    console.log('List');

    
    return (
        <ul>
            {arr.map((arr) => {
                const {id,title,desc, } = arr
                return (
                    <li key={id}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <button onClick={() => delet(id)}>delet</button>
                        <button onClick={() => startEditing(id)}>Редактировать</button>
                    </li>
                )
            })}
        </ul>
    )
})
export default List
// const List = React.memo(({arr, delet, startEditing}) => {
//     return (
//         <ul>
//             {arr.map((arr) => {
//                 const {id,title,desc, } = arr
//                 return (
//                     <li key={id}>
//                         <h1>{title}</h1>
//                         <p>{desc}</p>
//                         <button onClick={() => delet(id)}>delet</button>
//                         <button onClick={() => startEditing(id)}>Редактировать</button>
//                     </li>
//                 )
//             })}
//         </ul>
//     )

// })
// export default List
