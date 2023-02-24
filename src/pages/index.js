import Head from 'next/head'
import Link from 'next/link'
import {Container} from './indexStyles'

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
        <Container>
          <Link href={"/market"}> <h1>Hello</h1> </Link>
        </Container>
      </main>
    </>
  )
}
