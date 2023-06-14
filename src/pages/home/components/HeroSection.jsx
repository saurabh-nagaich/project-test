import "./HeroSection.scss"
import React from 'react'

function HeroSection() {
  return (
    <div className='HeroSection text-white flex flex-column align-items-center py-7 justify-content-center'>
      <h1 className="text-6xl">The Smarter Way to Learn</h1>
      <p className='font-semibold my-3'>CK-12’s FlexBook® 2.0 is now integrated with Flexi, our student tutor.</p>
    </div>
  )
}

export default HeroSection