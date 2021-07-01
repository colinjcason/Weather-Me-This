import React from 'react'
import Button from '../components/Button'

const HomePage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-5xl font-bold'>Discover the Weather</h1>
            <Button>
                Explore
            </Button>
        </div>
    )
}

export default HomePage
