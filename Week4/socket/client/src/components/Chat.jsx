import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");
    const [approve, setApprove] = useState(false);

    useEffect(() => {
        console.log("Welcome!")
        socket.on("new_message_from_server", msg => {
            console.log(msg)
            setMessages(prevMessages => [...prevMessages, msg])
        })

        // return () => socket.disconnect(true);
        return () => socket.removeAllListeners();
    }, [socket]);

    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", {username: username, content: input});
        setInput("");
    }

    const userNameHandler = (e) => {
        e.preventDefault()
        if (username){
            setApprove(true);
        }
    }

    return (
        <>
            {
                !approve ?
                <form onSubmit={userNameHandler}>
                    <label>I want to start chatting with the name:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <button>Start Chatting</button>
                </form> : 
                <>
                    <form onSubmit={submitHandler}>
                        <input type="text" name='msg' onChange={ (e) => setInput(e.target.value) } value={input} />
                        <button>Send</button>
                    </form>
                    <div>
                        {
                            messages.map((msg, i) => (<p key={i}>{msg.username}: {msg.content}</p>))
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Chat;