import { Filters } from '@components/Filters/Filters'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

      <p>Amoreira Food</p>
      <Filters />
    </div>
  )
}

export default Home
