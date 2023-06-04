"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavBar from "@/components/NavBar"
import { getPublicKey, getBalance } from "@/services/wallet"
import toast, { Toaster } from "react-hot-toast"
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineDropbox } from "react-icons/ai";

export default function Dashboard() {
  const [publicKey, setPublicKey] = useState(null)
  const [balance, setBalance] = useState(null)

  const connectWallet = async () => {
    let publicKeyTemp = await getPublicKey()
    if (typeof publicKeyTemp !== "string") {
      console.log(publicKeyTemp)
      toast.error("Phantom Wallet not installed")
      setTimeout(() => {
        open("https://phantom.app/download", "_blank")
      }, 1600)
      return
    }
    let balanceTemp = await getBalance(publicKeyTemp)
    setPublicKey(publicKeyTemp)
    setBalance(balanceTemp)

    location.replace("/dashboard")}
  return (
    <main className='w-full'>
    <NavBar connectWallet={connectWallet} />
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div
        className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none'
        aria-hidden='true'>
        <svg width='1360' height='578' viewBox='0 0 1360 578' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='illustration-01'>
              <stop stopColor='#FFF' offset='0%' />
              <stop stopColor='#EAEAEA' offset='77.402%' />
              <stop stopColor='#DFDFDF' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='200' r='64' />
            <circle cx='215' cy='443' r='128' />
          </g>
        </svg>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='flex flex-col items-center justify-center text-center pb-12 md:pb-16'>
            <h1
              className='text-5xl my-4 md:text-6xl font-extrabold max-w-[620px] leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'>
              CrowdFunding descentralizado con{" "}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400'>
                Aero
              </span>
            </h1>
          </div>
<div className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center' data-aos='zoom-y-out' data-aos-delay='300'>
  <div>
    <a className='p-2 px-6 rounded-full text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4' href=''>
      Ver proyectos
    </a>
    <a className='p-2 px-6 rounded-full text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4' href='/upload'>
      Subir proyectos 
    </a>
  </div>
</div>
      </div>
      </div>
      </section>
       </main>
  );
}
