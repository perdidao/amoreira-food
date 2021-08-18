import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Amoreira Food</p>
    </div>
  )
}

export default Home
