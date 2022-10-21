import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [disabledStart, setDisabledStart] = useState<boolean>(false)
    const [disabledStop, setDisabledStop] = useState<boolean>(true)

    const stop = () => {
        clearInterval(timerId)
        setDisabledStart(false)
        setDisabledStop(true)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        setDisabledStart(true)
        setDisabledStop(false)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = <div>{date.toLocaleTimeString()}</div>// fix with date
    const stringDate = <div>{date.toLocaleDateString()}</div> // fix with date

    return (
        <div>
            <div className={s.items}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div className={s.items}>
                    {stringDate}
                </div>) :
                <div className={s.hide}>
                    {stringDate}
            </div>
            }

            <SuperButton onClick={start} disabled={disabledStart} className={disabledStart ? s.disabled : ''}>start</SuperButton>
            <SuperButton onClick={stop} disabled={disabledStop} className={disabledStop ? s.disabled : ''}>stop</SuperButton>

        </div>
    )
}

export default Clock
