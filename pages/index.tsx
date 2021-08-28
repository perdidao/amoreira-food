import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import { CategoryList } from '@components/CategoryList/CategoryList'
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
      <CategoryList />
      <StoreList />
    </div>
  )
}

export default Home
