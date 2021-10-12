import { useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'

// Components
import { StoreItem } from '@components/StoreItem/StoreItem'

// Types
import { Store } from '@models/stores'

// Styles
import styles from './StoreList.module.scss'

const StoreList = (): JSX.Element => {
  const [stores, setStores] = useState<Store[]>()

  const _fetchStores = (): void => {
    Axios.get('/api/stores').then((response: AxiosResponse) =>
      setStores(response.data)
    )
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
