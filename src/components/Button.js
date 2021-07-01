import React from 'react'

const Button = ({children}) => {
    return (
        <button className='font-medium text-xl sm:text-2xl uppercase w-60 text-center bg-indigo-600 focus:bg-indigo-500 hover:bg-indigo-500 shadow-2xl p-4 rounded-full text-white focus:outline-none'>
            {children}
        </button>
    )
}

export default Button
