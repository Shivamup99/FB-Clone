import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div className="storyReel">
         <Story 
         image=" img/3.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Shivam Upadhyay"/>

         <Story 
         image="img/4.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Ankit Upadhyay"/>

         <Story 
         image="img/5.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Vipin Upadhyay"/>
         <Story 
         image="img/6.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Piyush Chaubey"/>

         <Story 
         image="img/7.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Sachin Upadhyay"/>

         <Story 
         image="img/8.jpg"
         profileSrc="https://www.facebook.com/Shhivamup"
         title="Sanskar Upadhyay"/>

            
        </div>
    )
}

export default StoryReel
