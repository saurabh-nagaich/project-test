import React from 'react'
import Card from '../../../components/card/Card'

function CardSection() {
    return (
        <div className='CardSection flex flex-wrap justify-content-center align-items-ceter gap-4 py-5'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardSection