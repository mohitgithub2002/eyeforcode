import Image from 'next/image'
import Member from '@/components/member'
import { Feature } from '@/components/feature'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
export default function Home() {
  return (
  <main>
    <section className=" dark:bg-black h-screen  dark:text-gray-100 flex items-center justify-center">
    <div
    class="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center"
    >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class=" text-6xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent sm:text-7xl"
      >
        A Community of Passionate Developers.

      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Join a vibrant community of tech enthusiasts, students, and professionals who are redefining the way coding education works. Build, collaborate, and own your journey with us.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-auto rounded border border-blue-600 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Join
        </a>

        <a
          class="block w-auto rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="https://0xmohitgoyal.notion.site/Eye-for-Code-898c64f6c6a149f388d49f6c0aa26d78?pvs=4"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  </section>
  <About />
  <Feature />
  <Member />
  <Footer />
  </main>
  
  )
}
