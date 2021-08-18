import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Load from '../components/Loader'

const HomePage = () => {
    const API_KEY = '43809593cd4fd991205d21be2120e27e'
    const [city, setCity] = useState('seattle')
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial&cnt=40`)
            .then(response => response.json())
            .then(res => {
                setData(res)
                setIsLoading(false)
                console.log(data)
                console.log(res)
            })
    }, [])

    
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-5xl font-bold uppercase'>Discover the Weather</h1>
            <Button className='font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-indigo-500 shadow-2xl p-6 rounded-full text-white'>
                EXPLORE
            </Button>

            {isLoading ? <Load /> : (
                <div>
                   {data.city.name}
                </div>
            )}
        </div>
    )
}

export default HomePage
