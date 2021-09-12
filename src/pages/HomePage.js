import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import Card from '../components/Card'
import { UilCloudSun } from '@iconscout/react-unicons'
import { UilThunderstormSun } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'

const HomePage = () => {
    const API_KEY = '43809593cd4fd991205d21be2120e27e'
    const [cityOne, setCityOne] = useState('new york')
    const [cityTwo, setCityTwo] = useState('san diego')
    const [cityThree, setCityThree] = useState('paris')
    const [cityFour, setCityFour] = useState('tokyo')
    const [cityFive, setCityFive] = useState('dubai')
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [icon, setIcon] = useState('icon')

    useEffect(() => {
            Promise.all([
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityOne}&appid=${API_KEY}&units=imperial&cnt=40`),
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityTwo}&appid=${API_KEY}&units=imperial&cnt=40`),
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityThree}&appid=${API_KEY}&units=imperial&cnt=40`),
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityFour}&appid=${API_KEY}&units=imperial&cnt=40`),
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityFive}&appid=${API_KEY}&units=imperial&cnt=40`)
            ]).then(responses => {
                return Promise.all(responses.map(res => {
                    return res.json()
                }))
            }).then(data => {
                setData(data)
                setIsLoading(false)
                console.log(data)
            }).catch(error => console.log(error))
    }, [cityOne, cityTwo, cityThree, cityFour, cityFive])

    
    return (
        <div>
            {isLoading ? <Spinner /> : (
                <div className='flex flex-col items-center justify-center h-screen space-y-10'>
                    <h1 className='text-5xl font-bold'>Welcome to coolWeather</h1>
                    <Button className='self-center p-6 text-xl font-bold text-center uppercase bg-indigo-500 rounded-full shadow-2xl sm:text-2xl w-60 text-gray-50'>
                        explore
                    </Button>
                    <div className='flex space-x-10'>
                        {Object.keys(data).map((city, i) => {
                        return <Card 
                                key={i} 
                                name={data[city].name}
                                weather={data[city].weather[0].main}
                                temp={data[city].main.temp}
                                tempMax={data[city].main.temp_max}
                                tempMin={data[city].main.temp_min}
                            >
                            </Card>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage
