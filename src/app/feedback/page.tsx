'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const initialState = {
    email : "",
    message : "",
    name : ""

}

export default function page() {
  const [data, setData] = useState(initialState);
  const router = useRouter();
  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }
  async function handleSubmit(e : FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const {email, message, name} = data;
  await fetch('/api/feedback', {
    method : 'POST',
    headers : {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify({
        email,
        message,
        name
    })
})
router.push('/success');

  }
    return (
        <main className='flex h-[100vh] flex-col justify-center  mx-auto w-80'>
  <form onSubmit={handleSubmit}>
       
       <div className="flex flex-col gap-4 mt-10">
       <input  placeholder='Email' type="email" name='email' value={data.email} onChange={handleChange} required />
        <input placeholder='Name'  type="text" name='name' value={data.name} onChange={handleChange} required />
        <textarea placeholder='Message'   name='message' value={data.message} onChange={handleChange} required />
       </div>
       <button className='p-4 w-full bg-cyan-400 rounded-xl font-bold text-xl mt-4 hover:opacity-[0.8]' type="submit">Submit</button>

    
  
</form>
 <p className='mt-10'>
    <Link href={`/`}>{"<-"} Go To Home </Link>
 </p>
        </main>
  
  )
}
