import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import { Categories } from '@components/Categories/Categories'
import { HeroSection } from '@components/HeroSection/HeroSection'
import { StoreList } from '@components/StoreList/StoreList'

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

      {/* Content */}
      <HeroSection />
      <Categories />
      <StoreList />
    </div>
  )
}

export default Home
