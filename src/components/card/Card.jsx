import "./Card.scss"
import React from 'react'

function Card({ imageUrl, lable }) {
    return (
        <div className='Card '>
            <div className="Image w-full" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <h2 className="Label px-3 py-4">{lable}</h2>
        </div>
    )
}

Card.defaultProps = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqGIrCbUKPoUeqoRK4YPRWvYitjZPi2vCgA&usqp=CAU",
    lable: "---"
}

export default Card