import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={props.filter === 'all' ? s.all : s.noAll}>All</button>
            <button onClick={setHigh} className={props.filter === 'high' ? s.high : s.noHigh}>High</button>
            <button onClick={setMiddle} className={props.filter === 'middle' ? s.middle : s.noMiddle}>Middle</button>
            <button onClick={setLow} className={props.filter === 'low' ? s.low : s.noLow}>Low</button>
        </div>
    )
}

export default Affairs
