function AddTodo ({title,desc,setTitle, setDesc,setItem, item, setArr}) {
    console.log('AddTodo');
    const addTitle = () => {
        if(title.trim() !== '' && desc.trim() !== '') {
          
          if (item !== null) {
            setArr((prevArr) => prevArr.map((i) =>i.id === item ? { ...i, title, desc } : i))
            setItem(null);
            setTitle('');
            setDesc('');
        } else {
            setArr((prevArr) => [ ...prevArr, {title: title, desc: desc, id: Math.random()},]);
            setTitle('');
            setDesc('');
        }  
        }  
    }
   return (
        <>
            <label>
                <span>заголовок</span>
                <input value={title} onChange={(e) => setTitle(e.target.value )} type="text" />
            </label>
            <label>
                <span>Описание</span>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
            </label>
            <button onClick={addTitle}>click</button>
        </>
   )
}
export default AddTodo