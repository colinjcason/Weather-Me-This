import React from 'react'
import { IonButton } from '@ionic/react';

const Button = ({ children, onClick }) => {
    return (
        <IonButton onClick={onClick} shape="round" size='large'>
            {children}
        </IonButton>
        
    )
}

export default Button
