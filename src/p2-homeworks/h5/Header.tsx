import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import { PATH } from './Routes'

function Header() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior+</NavLink>
            </div>
            <div className={s.block}/>
        </div>
    )
}

export default Header
