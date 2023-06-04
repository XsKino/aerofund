import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Estás en el dashboard</h1>
      <br />
      <Link href='/fund'>soy un proyecto, clickeame</Link>
      <br />
      <Link href='/upload'>Upload</Link>
    </main>
  )
}
