import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex space-x-8 bg-indigo-500 w-screen p-3 shadow-xl'>
            <Link to='/'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
                    />
                </svg>
            </Link>
        </div>
    )
}

export default Header
