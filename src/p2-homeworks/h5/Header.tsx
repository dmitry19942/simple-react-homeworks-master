import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/pre-junior'} activeClassName={s.active}>Pre-junior</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/junior'} activeClassName={s.active}>Junior</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/junior-plus'} activeClassName={s.active}>Junior PLUS</NavLink>
            </div>
        </nav>

    )
}

export default Header
