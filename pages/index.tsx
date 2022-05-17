import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5 ">
          <h1 className="text-6xl max-w-xl font-serif "><span className="underline docoration-black docoration-4">Medium</span> is a place to read write and connect</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
            asperiores incidunt similique pariatur facilis nihil quod repellat,
            excepturi dignissimos sapiente sunt sit quaerat vitae ea minima odio
            quisquam delectus.
          </h2>
        </div>
      <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="medium"/>
      </div>
    </div>
  )
}
