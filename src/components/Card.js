import React from 'react'

const Card = ({ name, weather, icon, temp, tempMax, tempMin }) => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg bg-gray-900 dark:bg-gray-50">
            <div className="px-4 py-2">
                <h1 className="text-3xl font-bold text-gray-50 uppercase dark:text-gray-900">{name}</h1>
                <p className="mt-1 text-sm text-gray-50 dark:text-gray-900">{weather}</p>
                <p>{icon}</p>
                <p className='text-gray-50 dark:text-gray-900'>Current {Math.round(temp)}{'\u00B0'}</p>
                <p className='text-gray-50 dark:text-gray-900'>High {Math.round(tempMax)}{'\u00B0'}</p>
                <p className='text-gray-50 dark:text-gray-900'>Low {Math.round(tempMin)}{'\u00B0'}</p>
            </div>
        </div>
    )
}

export default Card
