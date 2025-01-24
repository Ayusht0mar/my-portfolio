import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col gap-2 min-h-screen justify-center items-center'>
      <h2 className='text-neutral-200 text-3xl'>Opps! The page doesn&apos;t exist</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}