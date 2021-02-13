import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import {auth,provider} from './firebase';
import {actionTypes} from './reducer'
import './Login.css'
function Login() {
    const [state,dispatch] = useState();
    const signIn =()=>{
        //Signin..
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            console.log(result.user)
        }).catch((error)=> alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
           
            <img src="/img/13.jfif" alt="facebook" />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
        </div>
    )
}

export default Login
