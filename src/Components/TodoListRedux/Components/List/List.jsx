import React from 'react';
import s from './List.module.css'
import { useSelector } from 'react-redux'
const List = React.memo(({delet, startEditing}) => {

    const arr = useSelector((state) => state.todoList)
    return (
        <ul>
            {arr.map((arr) => {
                const {id,title,desc, } = arr
                return (
                    <li className={s.li} key={id}>
                        <h1 className={s.h1}>{title}</h1>
                        <p className={s.p}>{desc}</p>
                        <div className={s.btn}>
                            <button className={s.btn2} onClick={() => delet(id)}>delet</button>
                            <button className={s.btn2} onClick={() => startEditing(arr)}>Редактировать</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
})
export default List

