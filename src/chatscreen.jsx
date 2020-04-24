import React, { useState } from 'react';

const ChatScreen = (props) => {
    const [message, setmessage] = useState({ username: props.user.username, text: '' });

    const isDisabled = () => {
        return message.text === '';

    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setmessage({
            ...message,
            [name]: value,
            username: props.user.username
        })



    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAdd(message);
        console.log(message.text);

        setmessage({ text: '' })

    }
    return (

        <div>
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{props.user.username}</div>
                <ul className="message-list">
                    {props.messages.map((message, index) => (
                        <li
                            key={index}
                            className={
                                message.username === props.user.username ? 'message sender' : 'message recipient'
                            }
                        >
                            <p>{`${message.username} : ${message.text}`}</p>
                        </li>
                    ))}
                </ul>

                <div>
                    <form className="input-group" noValidate onSubmit={handleSubmit}>
                        <input type="text" name="text"
                            value={message.text} className="form-control" placeholder="Enter your message..." onChange={handleChange} />
                        <div className="input-group-append">
                            <button className="btn submit-button" disabled={isDisabled()} >
                                SEND
            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChatScreen;
