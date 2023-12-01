import { useCallback, useState } from "react";

import AddTodo from "./AddTodo/AddTodo";
import List from "./List/List";

function TodoList () {
    const [tasks, setTasks] = useState([]);

    const [editableTask, setEditableTask] = useState(null);

    const [title, setTitle] = useState('');
    const [descriprion, setDescriprion] = useState('');

    const deleteTask = useCallback((id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
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
                setTasks={setTasks}
            />
            <List
                tasks={tasks}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    );
}

export default TodoList;