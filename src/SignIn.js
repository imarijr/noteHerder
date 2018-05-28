import React from 'react'

import'./SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import {auth, githubProvider} from './base'

const SignIn = ({handleAuth}) => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    return(
        <div className="SignIn">
        <header class="Header">
          <img src={quill} alt=""/>
          <span class="title">Noteherder</span>
        </header>
        <main>
          <h3>Hey, Nerd! You a little OCD?</h3>
          <p>Take Notes!</p>
          <button class="github" onClick={() => authenticate(githubProvider)}>
            <i class="fab fa-github"></i>
            Sign in with GitHub
          </button>
          <button class="google" onClick = {() => {handleAuth}}>
            <img src= {googleLogo} alt=""/>
            Sign in with Google
          </button>
        </main>
        </div>
        
    )
}


export default SignIn