import Moment from 'moment'

// Nextjs related
import { useRouter } from 'next/router'
import Image from 'next/image'

// Types
import { Store as StoreProps } from '@models/stores'

// Syles
import styles from './StoreItem.module.scss'

const StoreItem = (props: StoreProps): JSX.Element => {
  const router = useRouter()

  const { title, slug, workdays } = props

  const day = Moment().format('dddd')
  const isOpened = workdays.includes(day)

  const _handleRedirect = (): void => {
    router.push(`/restaurante/${slug}`)
  }

  return (
    <div className={styles.storeItem} onClick={(): void => _handleRedirect()}>
      <Image
        src={`/assets/stores/${slug}.png`}
        alt={title}
        layout="intrinsic"
        width="200"
        height="200"
        className={styles.storeItem__logo}
      />
      <div className={styles.storeItem__info}>
        <h3 className={styles.storeItem__title}>{title}</h3>
        <p
          className={`${styles.storeItem__status} ${
            isOpened
              ? styles.storeItem__status_opened
              : styles.storeItem__status_closed
          }`}
        >
          {isOpened ? 'Aberto' : 'Fechado'}
        </p>
      </div>
    </div>
  )
}

export { StoreItem }
