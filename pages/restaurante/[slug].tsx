import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const StoreUnique: NextPage = () => {
  const router = useRouter()

  const {
    query: { slug },
  } = router

  return (
    <div className="page page--spaced">
      <Head>
        <title>{slug} | Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

      <p>{slug}</p>
    </div>
  )
}

export default StoreUnique
