import React from 'react'
import { assets } from '../assets/assets'

const Header2 = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative overflow-hidden'>

      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt=""
        className='absolute top-0 left-0 -z-10 opacity-50 w-full'
      />

      <div className='text-center mt-20 mb-8'>

        {/* AI Feature Badge */}
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New: AI Feature Integrated</p>
          <img
            src={assets.star_icon}
            className='w-2.5'
            alt="star"
          />
        </div>

        {/* Heading */}
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16'>
          Your own <span className='text-primary'>Blogging</span>
          <br />
          platform.
        </h1>

        {/* Description */}
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
          This is your space to think out loud, to share what matters,
          and to write without filters. Whether it's one word or a thousand,
          your story starts right here.
        </p>

      </div>

    </div>
  )
}

export default Header2