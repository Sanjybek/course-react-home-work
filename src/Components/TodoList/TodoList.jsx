import { useState } from "react"

function TodoList () {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')    
    const [arr, setArr] = useState([])
    const [item, setItem] = useState(null) 
    const addTitle = () => {
       if(title.trim() !== '' && desc.trim() !== '') {
            if (item !== null) {
                setArr((prevArr) =>
                prevArr.map((i) =>
                    i.id === item ? { ...i, title, desc } : i
                )
                )
                setItem(null);
            } else {
                setArr((prevArr) => [
                  ...prevArr,
                  {
                    title: title,
                    desc: desc,
                    id: prevArr.length + 1,
                  },
                ]);
                setTitle('');
                setDesc('');
              }      
       }  
    }
    
    const delet = (id) => {
        setArr((prevArr) => prevArr.filter((i) => i.id !== id));
    } 
    const startEditing = (id) => {
        setItem(id);
        const itemToEdit = arr.find((i) => i.id === id);
        if (itemToEdit) {
          setTitle(itemToEdit.title);
          setDesc(itemToEdit.desc);
        }
      };
    
    

    return (
        <>
          <label>
            <span>заголовок</span>
            <input  onChange={(e) => setTitle(e.target.value )} type="text" />
          </label>
          <label>
            <span>Описание</span>
            <input  onChange={(e) => setDesc(e.target.value)} type="text" />
          </label>
          <button onClick={addTitle}>click</button>
          <ul>
            {arr.map(({title,desc, id}) => {
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
        </>
       
    )
}
export default TodoList