import { Link } from 'react-router-dom';
import s from './Header.module.css'
function Header () {
    return (
        <ul className={s.ul}>
            <li>
                <Link to={'/'}>
                    Главная    
                </Link>
            </li>
            <li>
                <Link to={'/todo-list'}>
                    Todo list
                </Link>
            </li>
            <li>
                <Link to={'/calculator'}>
                    Calculator
                </Link>
            </li>
            <li>
                <Link to={'/resume'}>
                    resume
                </Link>
            </li>
           
        </ul>
    );
}

export default Header