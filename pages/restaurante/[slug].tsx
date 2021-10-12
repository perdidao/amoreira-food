import React, { useEffect, useState } from 'react'
import Axios from 'axios'

// Nextjs related
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

// Components
import { CustomHead } from '@components/CustomHead/CustomHead'

// Types
import { Store } from '@models/stores'

const StoreUnique: NextPage = () => {
  const router = useRouter()
  const [currentStore, setCurrentStore] = useState<Store>()

  const {
    query: { slug },
  } = router

  const _fetchStore = (): void => {
    Axios.get(`/api/stores/${slug}`).then((response) => {
      setCurrentStore(response.data)
    })
  }

  useEffect(() => {
    if (currentStore) return
    _fetchStore()
  })

  return (
    <div className="page page--spaced">
      <CustomHead titlePrefix={currentStore?.title} />

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
