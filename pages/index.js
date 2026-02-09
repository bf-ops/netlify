import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bishop Fox Takeover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Parked Courtesy of Bishop Fox" />
      </main>

      <Footer />
    </div>
  )
}
