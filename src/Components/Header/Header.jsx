import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Hedaer.module.css'
import {Layout, Menu} from 'antd';
const navList = [
    {
        key: '/',
        label: 'Header'
    },
    {
        key: '/posts',
        label: 'Post'
    },
    {
        key: '/comments',
        label: 'Comments'
    },
    {
        key: '/albums',
        label: 'Albums'
    },
    {
        key: '/photos',
        label: 'TodosPage'
    }
]
function Header  () {
    const navigate = useNavigate()
    const menu = (e) => {
        console.log(e);

        navigate(e.key)
    }
    return (
        <Layout.Header className={s.header_menu}>
            <div className={s.headerLogo}>LOGO</div>
            <Menu onClick={menu}
                theme="dark"
                mode='horizontal'
                items={navList}
                
            />
        </Layout.Header>
    );
};

export default Header;