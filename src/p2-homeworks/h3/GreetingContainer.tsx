import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement> ) => {
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('Name is required')
        }
    }

    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        }
    }

    const onKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyEnter={onKeyEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
