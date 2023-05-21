'use client';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const goToFeedback = () => {
    router.push('/feedback');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-col gap-4 items-center">
         <h1 className='text-2xl '>Send Feedback</h1>
         <button onClick={goToFeedback}>Feedback</button>
      </div>

    
    </main>
  )
}
