import React from 'react'

import'./SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import {auth, githubProvider, googleProvider} from './base'



const SignIn = ({handleAuth}) => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    return(
        <div className="SignIn">
        <header className="Header">
          <img src={quill} alt=""/>
          <span className="title">Noteherder</span>
        </header>
        <main>
          <h3>Hey, Nerd! You a little OCD?</h3>
          <p>Take Notes!</p>
          <button className="github" onClick={() => authenticate(githubProvider)}>
            <i className="fab fa-github"></i>
            Sign in with GitHub
          </button>
          <button className="google" onClick = {() => authenticate(googleProvider)}>
            <img src= {googleLogo} alt=""/>
            Sign in with Google
          </button>
        </main>
        </div>
        
    )
}


export default SignIn