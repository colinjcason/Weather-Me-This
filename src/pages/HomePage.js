import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { IonCardContent, IonCard } from '@ionic/react'

const HomePage = () => {
    const API_KEY = '43809593cd4fd991205d21be2120e27e'
    const [city, setCity] = useState('seattle')
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial&cnt=40`)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setData(response)
        })
    }, [])

    
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-5xl font-bold uppercase'>Discover the Weather</h1>
            <Button>
                EXPLORE
            </Button>

                <IonCard>
                    <IonCardContent>
                        {data.city.name}
                    </IonCardContent>
                </IonCard>
        </div>
    )
}

export default HomePage
