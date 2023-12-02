import React from 'react';
import s from '../List/List.module.css'
import { useSelector } from 'react-redux';

const List = React.memo(({
    deleteTask,
    editTask,
    onDone,
    onCheck
}) => {
const tasks = useSelector((state) => state.todoList);
return (
    <ul className={s.list}>
        {tasks.map((task) => {
            const { id, title, descriprion , isDone , checkBox} = task;
            console.log(task);
            return (
                <li className={isDone ? s.taskDone : s.task} key={id}>
                    <div className={s.block}>
                        <div>
                            <h4 className={checkBox ? s.title_cl : s.title}>{title}</h4>
                            <p className={checkBox ? s.descriprion_cl : s.descriprion}>{descriprion}</p>
                        </div> 
                        <input onClick={() => onCheck(id)} className={s.inp} type="checkbox" />
                    </div>
                    <div onClick={() => onDone(id)} className={s.btnWrapper}>
                        <button className={s.delete} onClick={() => deleteTask(id)}>Удалить</button>
                        <button className={s.edit} onClick={() => editTask(task)}>Редактировать</button>
                    </div>
                </li>
            );
        })}
    </ul>
);
});

export default List;