import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { IonCardContent, IonCard } from '@ionic/react'

const HomePage = () => {
    const API_KEY = '43809593cd4fd991205d21be2120e27e'
    const [city, setCity] = useState('seattle')

    // useEffect(() => {
    //     async function fetch() {
    //         fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial&cnt=40`)
    //         .then(res => res.json())
    //         .then(res => setData([res]))
    //     }
    //     fetch()
    // }, [])

    
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-5xl font-bold uppercase'>Discover the Weather</h1>
            <Button>
                EXPLORE
            </Button>

            {/* {data.map(data =>
                <IonCard>
                    <IonCardContent>
                        {data.main.temp}
                    </IonCardContent>
                </IonCard>
            )} */}
        </div>
    )
}

export default HomePage
