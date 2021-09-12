import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithGoogle, signOut } from '../firebase/firebase.utils.js'
import useDarkMode from '../hook/useDarkMode'
import { useHistory } from 'react-router'

const Header = () => {
    let history = useHistory()
    const [colorTheme, setTheme] = useDarkMode()
    const [user, setUser] = useState()

    const handleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result)
            setUser(result)
        })
    }

    const handleSignOut = () => {
        signOut().then(() => setUser(''));
        history.push('/')
    }

    return (
        <nav class="bg-indigo-500 shadow">
            <div class="container px-6 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                className="w-10 h-10 mr-2 text-gray-50" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>

                        <div class="text-xl font-semibold text-gray-700">
                            <Link to='/' class="text-2xl font-bold text-gray-50 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">coolWeather</Link>                        
                        </div>
                    </div>

                    <div class="flex mt-4 md:mt-0">
                        {user ? (
                            <div className='flex items-center space-x-5'>         
                                <a href="/" >
                                    <img 
                                    alt="profile" 
                                    src={user.additionalUserInfo.profile.picture} 
                                    className="object-cover w-10 h-10 mx-auto rounded-full"
                                    />
                                </a>
                                <Button 
                                className='flex text-xl font-bold transition-colors duration-200 rounded text-gray-50 sm:text-2xl hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-50'
                                onClick={handleSignOut} >
                                    SIGN OUT
                                </Button>
                            </div>                
                        ) : (
                            <button 
                            className='flex text-xl font-bold transition-colors duration-200 rounded text-gray-50 sm:text-2xl hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-50'
                            onClick={handleSignIn}>
                                SIGN IN
                            </button>
                        )}
                        <div className='flex items-center ml-5'>
                            {colorTheme === 'light' ? (
                                <svg onClick={() => setTheme(colorTheme)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg onClick={() => setTheme(colorTheme)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </div>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default Header;
