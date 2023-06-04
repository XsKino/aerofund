import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/NavBar"

export default function DshBrdSection({ children }) {
  return (
    <div className='w-full flex flex-row py-6 px-12'>
      <NavBar />
    </div>
  )
}
