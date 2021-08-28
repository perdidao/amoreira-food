import { useEffect, useState } from 'react'
import Axios from 'axios'

import { Store } from '@models/stores'
import { StoreItem } from '@components/StoreItem/StoreItem'

import styles from './StoreList.module.scss'

const StoreList = (): JSX.Element => {
  const [stores, setStores] = useState<Store[]>()

  const _fetchStores = (): void => {
    Axios.get('/api/stores').then((response) => {
      setStores(response.data)
    })
  }

  useEffect(() => {
    if (stores) return
    _fetchStores()
  }, [stores])

  return (
    <section className={styles.storeList}>
      {stores?.map((store, index) => (
        <StoreItem key={index} {...store} />
      ))}
    </section>
  )
}

export { StoreList }
