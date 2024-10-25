import React, { useState } from 'react'
import { assets } from '../assets/assets'
const Backsilder = () => {

    const [silderPostion, setSilderPostion] = useState(50)

    const handleSliderChange = (e) => {
        setSilderPostion(e.target.value)
    }

  return (
    <div className='pb-10 md:py-20 mx-2'> 
        {/* Title */}
        <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-bg-gray-700'>Remove Background With High <br />Quality and Accuracy</h1>
        
        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl '>
            {/* background */}
            <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2-silderPostion}% 0 0)`}} alt='Background'/>
            
            {/* foreground */}  
            <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${silderPostion}% )`}} alt='Foreground'/>
            {/* silder */}
            <input className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type='range' min='0' max='100' value={silderPostion} onChange={handleSliderChange} />
        </div>
    </div>
  )
}

export default Backsilder