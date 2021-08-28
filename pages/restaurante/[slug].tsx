import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Store } from '@models/stores'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Image from 'next/image'

const StoreUnique: NextPage = () => {
  const router = useRouter()
  const [stores, setStores] = useState<Store[]>()
  const [currentStore, setCurrentStore] = useState<Store>()

  const {
    query: { slug },
  } = router

  const _fetchStores = (): void => {
    Axios.get('/api/stores').then((response) => {
      setStores(response.data)
    })
  }

  useEffect(() => {
    if (stores) return
    _fetchStores()
  }, [stores])

  useEffect(() => {
    if (!stores) return

    const selected = stores.filter((store) => store.slug === slug)
    setCurrentStore(selected[0])
  }, [stores, slug])

  return (
    <div className="page page--spaced">
      <Head>
        <title>{currentStore?.title} | Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

      <h1>{currentStore?.title}</h1>
      <Image
        src={`/assets/stores/${slug}.png`}
        alt={currentStore?.title}
        aria-hidden="true"
        layout="intrinsic"
        width="140"
        height="140"
      />
      {currentStore?.phone}
      {currentStore?.whatsapp}
    </div>
  )
}

export default StoreUnique
