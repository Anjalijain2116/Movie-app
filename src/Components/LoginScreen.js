import React,{useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
    const [signIn,setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
         
                <button className="loginScreen__button" onClick={()=> setSignIn(true)}>Sign In</button>
                <div className="loginScreen__gradient"/>
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen/>
                ):(
                    <>
                <h1>Save shows and movies to keep track of what you want to watch</h1>
                <h2>Sign in to access your Watchlist</h2>
                <button onClick={()=> setSignIn(true)}>Sign In to BINGE IT</button>
                </>
                )}
                
            </div>
        </div>
    ) 
}

export default LoginScreen;