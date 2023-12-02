import { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import {deleteTodo, onDoneTodo, onCheckBox} from '../../store/actions';
import TodoList from "../../Components/TodoList/TodoList";

function TodoListContainer () {
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

    const onDone = useCallback((id) => {
        dispatch(onDoneTodo(id));
    }, []);

    const onCheck = useCallback((id) => {
        dispatch(onCheckBox(id))

    })

    return <TodoList
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
                deleteTask={deleteTask}
                editTask={editTask}
                onDone={onDone}
                onCheck={onCheck}
            />
}

export default TodoListContainer;