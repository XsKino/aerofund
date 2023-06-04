import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className='w-full'>

      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap gap-2 items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center">
            <div className="h-8 mr-3">
              <svg className="w-[30px]" viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="511" height="511" rx="255.5" fill="#2864FF" />
                <path d="M223.229 344.442L165.376 182.691H204.338L266.126 344.442H223.229Z" fill="white" />
                <path d="M281.868 344.442V182.691H406.625V212.995H316.501V344.442H281.868Z" fill="white" />
                <path d="M346.018 265.731V235.428H406.625V265.731H346.018Z" fill="white" />
                <path d="M167.737 281.08L148.06 225.195L102.014 344.836H145.305L167.737 281.08Z" fill="white" />
              </svg>
            </div>
            <span class="self-center text-2xl font-semibold whitespace-nowrap">AeroFund</span>
          </a>
          <div class="flex md:order-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Connect Wallet</button>
          </div>
        </div>
      </nav>

      <section className="relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="flex flex-col items-center justify-center text-center pb-12 md:pb-16">
              <h1 className="text-5xl my-4 md:text-6xl font-extrabold max-w-[620px] leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">CrowdFunding descentralizado con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Aero</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Impulsando el cambio, un proyecto a la vez: tu idea, nuestra comunidad, posibilidades infinitas.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div>
                    <a className="p-2 px-6 rounded-full text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="py-8 px-4 flex flex-wrap mx-auto max-w-screen-xl text-left lg:py-16 lg:px-6">
          <div class="max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Testimonials</h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 class="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                <p class="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
                <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium text-left">
                    <div>Bonnie Green</div>
                    <div class="text-sm font-light text-gray-500">Developer at Open AI</div>
                  </div>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote class="mx-auto mb-8 max-w-2xl">
                <h3 class="text-lg font-semibold text-gray-900 ">Solid foundation for any project</h3>
                <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
                <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
                  <div class="space-y-0.5 font-medium text-left">
                    <div>Roberta Casas</div>
                    <div class="text-sm font-light text-gray-500 ">Lead designer at Dropbox</div>
                  </div>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 class="text-lg font-semibold text-gray-900">Mindblowing workflow and variants</h3>
                <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 class="text-lg font-semibold text-gray-900">Efficient Collaborating</h3>
                <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
            </figure>
          </div>
          <div class="text-center">
            <a href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Show more...</a>
          </div>
          </div>
      </section>

    </main>
  )
}
