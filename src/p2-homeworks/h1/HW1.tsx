import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png',
    name: 'dmitriy19942',
    message: 'Hi, how are you?',
    time: '10:25',
}



function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
