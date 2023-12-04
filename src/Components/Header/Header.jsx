import React from 'react';
import { Link } from 'react-router-dom';
import s from './Hedaer.module.css'

function Header  () {
    return (
        <>
            <ul>
                <li className={s.li_header}>
                    <Link to={'/'}>
                        header
                    </Link>

                    <Link to={'/posts'}>
                        Posts
                    </Link>
                    <Link to={'/comments'}>
                        Comments
                    </Link>
                    <Link to={'/albums'}>
                        Albums
                    </Link>
                    <Link to={'/photos'}>
                        Photos
                    </Link>
                </li>
            </ul>
            
        </>
    );
};

export default Header;