import AddTodo from "./AddTodo/AddTodo";
import List from "./List/List";

function TodoList ({
    title,
    setTitle,
    descriprion,
    setDescriprion,
    editableTask,
    setEditableTask,
    deleteTask,
    editTask,
    onDone,
    onCheck,
}) {
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
                onDone={onDone}
                onCheck={onCheck}
            />
        </>
    );
}

export default TodoList;