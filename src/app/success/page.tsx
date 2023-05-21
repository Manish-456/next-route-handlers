import Link from 'next/link'
import React from 'react'

export default function success() {
  return (
    <div className='mt-40 w-full sm:w-1/2 text-center mx-auto'>
       <div className="flex flex-col gap-4">
        <h1>Thanks for your feedback</h1>
        <Link href={`/`} className='bg-black/90 text-white p-4 w-40 rounded-sm mx-auto'>Go to Home</Link>
       </div>
    </div>
  )
}
