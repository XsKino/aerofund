import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/NavBar"

export default function Dashboard() {
  return (
    <main className='w-screen h-screen bg-red-500'>
      <NavBar />
      <div id='body' className='w-full'>
        <br />
        <Link href='/fund'>soy un proyecto, clickeame</Link>
        <br />
        <Link href='/upload'>Upload</Link>
      </div>
    </main>
  )
}
