import "./CategoryHeroContainer.scss"
import React from 'react'

function CategoryHeroContainer({ data }) {
    // const {
    //     image,
    //     heading,
    //     addedBy,
    //     updatedAt,
    //     status,
    //     description,
    //     standardsAlignment,
    //     Author
    // } = data
    return (
        <div className='CategoryHeroContainer px-8 flex gap-7 w-full py-7 justify-content-center '>
            <div className="Image" style={{ backgroundImage: `url(${data?.image})` }}></div>
            <div className="TextArea">
                <div className="Heading text-5xl font-bold text-white">{data?.heading}</div>
                <div className="AddedBy flex gap-2 font-medium py-3"><span> BY {data?.author} </span> <div className="text-white">| Last Modified: {data?.updatedAt}</div></div>
                <div className="Status py-2 px-4 font-bold">{data?.status}</div>
                <div className="Description text-white  text-sm py-3">{data?.description}</div>
            </div>
        </div>
    )
}

export default CategoryHeroContainer