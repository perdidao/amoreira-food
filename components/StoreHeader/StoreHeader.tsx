// Nextjs related
import Image from 'next/image'

// Components
import { WorkdayStatus } from '@components/WorkdayStatus/WorkdayStatus'

// Types
import { Store as StoreProps } from '@models/stores'

// Styles
import styles from './StoreHeader.module.scss'

const StoreHeader = (props: StoreProps): JSX.Element => {
  const { name, slug, phone, whatsapp, workdays } = props

  return (
    <section className={styles.storeHeader}>
      <figure className={styles.storeHeader__image}>
        <Image
          src={`/assets/stores/${slug}.png`}
          alt={name}
          aria-hidden="true"
          width="240"
          height="200"
        />
      </figure>
      <div className={styles.storeHeader__info}>
        <h1 className={styles.storeHeader__title}>{name}</h1>
        <WorkdayStatus workdays={workdays} />
        <p className={styles.storeHeader__contact}>
          {phone} | {whatsapp}
        </p>
      </div>
    </section>
  )
}

export { StoreHeader }
