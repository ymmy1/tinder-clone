import React from 'react'
import Chat from './Chat'

import "./Chats.css"
function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Hi man"
                timestamp="40 seconds ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />
        </div>
    )
}

export default Chats
