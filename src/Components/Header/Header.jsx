import React from 'react';
import { Link } from "react-router-dom";
function Header  ()  {
    return (
        // <>
            <ul style={{display: 'flex', gap: '20px', fontSize: '20px'}}>
                <li>
                    <Link to={'/'}>
                        Header
                    </Link>
                </li>
                <li>
                    <Link to={'/todo-list'}>
                        TodoList
                    </Link>
                </li>
                <li>
                    <Link to={'/calculator'}>
                        Calculator
                    </Link>
                </li>
                <li>
                    <Link to={'/resume'}>
                        Resume
                    </Link>
                </li>
               
                
            </ul>
            
        // </>
    );
};

export default Header;