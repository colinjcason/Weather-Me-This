import React from 'react'
import { Link } from 'react-router-dom'
import { cloud } from 'ionicons/icons';
import { IonIcon } from '@ionic/react'

const Header = () => {
    return (
        <div className='fixed flex justify-between space-x-8 bg-indigo-500 w-full p-3 shadow-xl'>
            <Link to='/'>
                <IonIcon slot="start" icon={cloud} size='large' color='light'></IonIcon>
            </Link>
            <Link to='/signin' className='flex text-white font-small text-xl sm:text-2xl'>
                SIGN IN
            </Link>
        </div>
    )
}

export default Header
