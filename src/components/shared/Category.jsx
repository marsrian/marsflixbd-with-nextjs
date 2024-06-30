import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className='md:border-l md:px-4 mt-12 md:mt-0'>
      <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Movie Category: </h3>
      <ul className='flex flex-col space-y-2 mt-3'>
        <Link href="/bangla-movie"><li>Bangla Movie</li></Link>
        <Link href="/bangla-web-series"><li>Bangla Web Series</li></Link>
        <Link href="/bollywood-movie"><li>Bollywood Movie</li></Link>
        <Link href="/hindi-web-series"><li>Hindi Web Series</li></Link>
        <Link href="/hollywood-movie"><li>Hollywood Movie</li></Link>
        <Link href="english-tv-series"><li>English TV Series</li></Link>
      </ul>
    </div>
  )
}

export default Category
