import React from 'react'
import Card from '../../../components/card/Card'
import { Link } from 'react-router-dom'

function CardSection({ data, category, categorySlug }) {

    return (
        <div className='CardSection flex flex-wrap justify-content-center align-items-ceter gap-4 py-5 px-4'>
            {
                data?.map(({ label, imageUrl, slug }, idx) => (
                    <Link key={idx} to={`${categorySlug}/${slug}`} className='no-underline'>
                        <Card imageUrl={imageUrl} lable={label} />
                    </Link>
                ))
            }
        </div>
    )
}

export default CardSection