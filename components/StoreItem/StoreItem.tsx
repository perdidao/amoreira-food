// Nextjs related
import { useRouter } from 'next/router'
import Image from 'next/image'

// Components
import { WorkdayStatus } from '@components/WorkdayStatus/WorkdayStatus'

// Types
import { Store as StoreProps } from '@models/stores'

// Syles
import styles from './StoreItem.module.scss'

const StoreItem = (props: StoreProps): JSX.Element => {
  const router = useRouter()

  const { name, slug, workdays } = props

  const _handleRedirect = (): void => {
    router.push(`/restaurante/${slug}`)
  }

  return (
    <div className={styles.storeItem} onClick={(): void => _handleRedirect()}>
      <Image
        src={`/assets/stores/${slug}.png`}
        alt={name}
        layout="intrinsic"
        width="200"
        height="200"
        className={styles.storeItem__logo}
      />
      <div className={styles.storeItem__info}>
        <h3 className={styles.storeItem__title}>{name}</h3>
        <WorkdayStatus workdays={workdays} />
      </div>
    </div>
  )
}

export { StoreItem }
