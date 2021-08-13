import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cloud } from 'ionicons/icons';
import { IonIcon } from '@ionic/react'
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
                <IonIcon slot="start" icon={cloud} size='large' color='light'></IonIcon>
            </Link>
            
            {user ? (
                <span className='flex space-x-8'>
                    <h3 className='text-white'>{user.displayName}</h3>
                    <button 
                    className='text-white font-small text-xl sm:text-2xl'
                    onClick={handleSignOut} >
                        SIGN OUT
                    </button>
                </span>                
            ) : (
                <button 
                className='flex text-white font-small text-xl sm:text-2xl'
                onClick={handleSignIn} >
                    SIGN IN
                </button>
            )}            
        </div>
    )
}

export default Header
