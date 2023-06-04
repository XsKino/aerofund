import Image from "next/image"
import Link from "next/link"

export default function NavBar({ connectWallet }) {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap gap-2 items-center justify-between mx-auto p-4'>
        <a href='' className='flex items-center'>
          <div className='h-8 mr-3'></div>
          <div>
            <Image src='/assets/logo-long-black.png' width={120} height={40} />
          </div>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
