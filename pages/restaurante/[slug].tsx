import React, { useEffect, useState } from 'react'
import Axios from 'axios'

// Nextjs related
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// Components
import { CustomHead } from '@components/CustomHead/CustomHead'
import { StoreHeader } from '@components/StoreHeader/StoreHeader'

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

  if (!currentStore) {
    return <></>
  }

  return (
    <main className="page page--spaced">
      <CustomHead titlePrefix={currentStore?.name} />
      <StoreHeader {...currentStore} />
    </main>
  )
}

export default StoreUnique
