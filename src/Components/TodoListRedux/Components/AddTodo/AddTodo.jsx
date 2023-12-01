
import { useDispatch } from 'react-redux'
// import { addTodo, editTodo } from '../../../../Store/index';
import {addTodo , editTodo} from '../../../../Store/index'
import s from './AddTodo.module.css'
function AddTodo ({title,desc,setTitle, setDesc,setItem, item, }) {
    const dispatch = useDispatch()
    const addTitle = () => {
        if(title.trim() !== '' && desc.trim() !== '') {
          
          if (item) {
            dispatch(editTodo({title, desc, id: item.id}))
            
            setItem(null);
            setTitle('');
            setDesc('');
        } else {
            dispatch(addTodo({title, desc, id: Math.random()}))
            dispatch(addTodo())
            setTitle('');
            setDesc('');
        }  
        }  
    }
   return (
        <>
           <div className={s.block}>
               <div className={s.container}>
                    <label className={s.label}>
                        <span className={s.span}>заголовок</span>
                        <input className={s.inp} value={title} onChange={(e) => setTitle(e.target.value )} type="text" />
                    </label>
                    <label className={s.label}>
                        <span className={s.span}>Описание</span>
                        <input className={s.inp} value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
                    </label>
                    <button className={s.btn} onClick={addTitle}>click</button>
               </div>
           </div>
        </>
   )
}
export default AddTodo