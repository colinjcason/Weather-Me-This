import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import useDarkMode from '../hook/useDarkMode'
import Card from '../components/Card'
import { UilCloudSun } from '@iconscout/react-unicons'

const HomePage = () => {
    // useDarkMode();
    const API_KEY = '43809593cd4fd991205d21be2120e27e'
    const [city, setCity] = useState('new york')
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial&cnt=40`)
            .then(response => response.json())
            .then(res => {
                setData(res)
                setIsLoading(false)
                console.log(res)
            })
    }, [city])

    
    return (
        <div>
            {isLoading ? <Spinner /> : (
                <div className='h-screen flex flex-col justify-center items-center space-y-10'>
                    <h1 className='text-5xl font-bold'>welcome to coolWeather</h1>
                    <Button className='font-bold uppercase self-center text-xl sm:text-2xl w-60 text-center bg-indigo-500 shadow-2xl p-6 rounded-full text-gray-50'>
                        explore
                    </Button>
                    <Card 
                        name={data.name}
                        weather={data.weather[0].main}
                        icon={<UilCloudSun color='#6366f1' />}
                        temp={data.main.temp}
                        tempMax={data.main.temp_max}
                        tempMin={data.main.temp_min}
                    >
                    </Card>
                </div>
            )}
        </div>
    )
}

export default HomePage
