import Image from "next/image"
import Link from "next/link"

export default function Upload() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Este es un proyecto</h1>
      <Link href='/upload'>Apuesta en un sueño</Link>
      <br />
      <Link href='/dashboard'>Mejor no</Link>
    </main>
  )
}
