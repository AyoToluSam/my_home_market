import Head from 'next/head'
import Link from 'next/link'
import HomePage from '@/components/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Home Market</title>
        <meta name="description" content="A market to buy and sell home equipment and appliances." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage/>
      </main>
    </>
  )
}
