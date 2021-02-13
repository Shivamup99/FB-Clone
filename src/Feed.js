import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="img/3.jpg"
            message="This day is aswome"
            timestamp="8:36"
            username="Shivam"
            image="img/11.jpg"/>

<Post 
            profilePic="img/3.jpg"
            message="This day is aswome"
            timestamp="8:36"
            username="Shivam"
            />
            
        </div>
    )
}

export default Feed
