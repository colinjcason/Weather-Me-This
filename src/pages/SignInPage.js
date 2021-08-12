import React from 'react'
import Button from '../components/Button'
import { signInWithGoogle } from '../firebase/firebase.utils.js'

const SignInPage = ({ history }) => {
    const handleSignIn = () => {
        signInWithGoogle().then((result) => {
            console.log(result)
            if(result.user.email) {
                history.push('/')
            }
        })
    }
    
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-10'>
            <Button onClick={handleSignIn}>
                SIGN IN WITH GOOGLE
            </Button>
        </div>
    )
}

export default SignInPage

