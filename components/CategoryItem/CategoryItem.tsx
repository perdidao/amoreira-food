// Nextjs related
import { useRouter } from 'next/router'
import Image from 'next/image'

// Types
import { Category } from '@models/categories'

// Styles
import styles from './CategoryItem.module.scss'

const CategoryItem = (props: Category): JSX.Element => {
  const router = useRouter()
  const { slug, title, totalItems } = props

  const _handleRedirect = (): void => {
    router.push(`/categoria/${slug}`)
  }

  return (
    <button
      className={styles.categoryItem}
      onClick={(): void => _handleRedirect()}
    >
      <Image
        src={`/assets/icons/categories/${slug}.png`}
        alt={title}
        width={48}
        height={48}
      />
      <strong className={styles.categoryItem__title}>
        {title}{' '}
        <span className={styles.categoryItem__quantity}>({totalItems})</span>
      </strong>
    </button>
  )
}

export { CategoryItem }
