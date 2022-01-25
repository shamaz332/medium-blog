import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="py-2">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header/>
    </div>
  )
}
