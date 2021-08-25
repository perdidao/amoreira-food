import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import { Categories } from '@components/Categories/Categories'

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

      {/* Content */}
      <Categories />
    </div>
  )
}

export default Home
