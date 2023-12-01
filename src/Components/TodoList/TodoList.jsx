import { useCallback, useState } from "react";

import AddTodo from "./AddTodo/AddTodo";
import List from "./List/List";
import { useDispatch } from "react-redux";
import {deleteTodo} from '../../store/actions';

function TodoList () {
    const dispatch = useDispatch();

    const [editableTask, setEditableTask] = useState(null);

    const [title, setTitle] = useState('');
    const [descriprion, setDescriprion] = useState('');

    const deleteTask = useCallback((id) => {
        dispatch(deleteTodo(id));
    }, []);

    const editTask = useCallback((task) => {
        const { title, descriprion } = task;
        setTitle(title);
        setDescriprion(descriprion);
        
        setEditableTask(task);
    }, []);

    return (
        <>
            <AddTodo
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
            />
            <List
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    );
}

export default TodoList;