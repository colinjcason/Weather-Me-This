import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithGoogle, signOut } from '../firebase/firebase.utils.js'
import useDarkMode from '../hook/useDarkMode'

const Header = ({ history }) => {
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
        history.push('/explore')
    }

    return (
        <nav class="bg-indigo-500 shadow">
            <div class="container px-6 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-10 w-10 text-gray-50 mr-2" 
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
                                    className="mx-auto object-cover rounded-full h-10 w-10"
                                    />
                                </a>
                                <Button 
                                className='flex text-gray-50 font-bold text-xl sm:text-2xl hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-50 rounded'
                                onClick={handleSignOut} >
                                    SIGN OUT
                                </Button>
                            </div>                
                        ) : (
                            <button 
                            className='flex text-gray-50 font-bold text-xl sm:text-2xl hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-50 rounded'
                            onClick={handleSignIn}>
                                SIGN IN
                            </button>
                        )}
                        <div className='ml-4 flex items-center'>
                            {colorTheme === 'light' ? (
                                <svg onClick={() => setTheme(colorTheme)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg onClick={() => setTheme(colorTheme)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </div>
                    </div>                    
                </div>
            </div>
        </nav>



        /* <div className='fixed flex justify-between bg-indigo-500 w-full p-2 shadow-xl'>
            <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-white" 
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
                    <a href="/" >
                        <img 
                        alt="profile" 
                        src={user.additionalUserInfo.profile.picture} 
                        className="mx-auto object-cover rounded-full h-14 w-14"
                        />
                    </a>
                    {/* <h3 className='text-white'>{user.user.displayName}</h3> */
                    /* <Button 
                    className='text-white font-small text-xl sm:text-2xl'
                    onClick={handleSignOut} >
                        SIGN OUT
                    </Button>
                </span>                
            ) : (
                <button 
                className='flex text-white font-small text-xl sm:text-2xl'
                onClick={handleSignIn} >
                    SIGN IN
                </button>
            )}            
        </div> */
    )
}

export default Header;
