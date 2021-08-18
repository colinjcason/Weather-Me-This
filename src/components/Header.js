import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithGoogle, signOut } from '../firebase/firebase.utils.js'

const Header = () => {
    const [user, setUser] = useState()

    const handleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result)
            setUser(result.user)
        })
    }

    const handleSignOut = () => {
        signOut().then(() => setUser(''))
    }

    return (
        <div className='fixed flex justify-between space-x-8 bg-indigo-500 w-full p-3 shadow-xl'>
            <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            </Link>
            
            {user ? (
                <span className='flex space-x-8'>
                    <h3 className='text-white'>{user.displayName}</h3>
                    <Button 
                    className='text-white font-small text-xl sm:text-2xl'
                    onClick={handleSignOut} >
                        SIGN OUT
                    </Button>
                </span>                
            ) : (
                <span 
                className='flex text-white font-small text-xl sm:text-2xl'
                onClick={handleSignIn} >
                    SIGN IN
                </span>
            )}            
        </div>
    )
}

export default Header
