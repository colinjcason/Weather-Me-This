import React from 'react'

const Card = ({ name, weather, icon, temp, tempMax, tempMin }) => {

    return (
        <div className="max-w-xs mx-auto overflow-hidden transition duration-500 bg-gray-900 rounded-lg shadow-lg dark:bg-gray-50">
            <div className="px-4 py-2">
                <h1 className="text-3xl font-bold uppercase transition duration-500 text-gray-50 dark:text-gray-900">{name}</h1>
                <p className="mt-1 text-sm transition duration-500 text-gray-50 dark:text-gray-900">{weather}</p>
                <p className='transition duration-500 text-gray-50 dark:text-gray-900'>{icon}</p>
                <p className='transition duration-500 text-gray-50 dark:text-gray-900'>Current {Math.round(temp)}{'\u00B0'}F</p>
                <p className='transition duration-500 text-gray-50 dark:text-gray-900'>High {Math.round(tempMax)}{'\u00B0'}F</p>
                <p className='transition duration-500 text-gray-50 dark:text-gray-900'>Low {Math.round(tempMin)}{'\u00B0'}F</p>
            </div>
        </div>
    )
}

export default Card
