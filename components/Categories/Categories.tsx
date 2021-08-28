import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Category } from '@models/categories'
import Image from 'next/image'
import styles from './Categories.module.scss'

const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>()

  const _fetchCategories = (): void => {
    Axios.get('/api/categories').then((response) => {
      setCategories(response.data)
    })
  }

  useEffect(() => {
    if (categories) return
    _fetchCategories()
  }, [categories])

  return (
    <nav className={styles.categories}>
      {categories?.map((category) => (
        <button key={category.slug} className={styles.categories__link}>
          <Image
            src={category.icon}
            alt={category.title}
            width={48}
            height={48}
          />
          <strong className={styles.categories__title}>
            {category.title}{' '}
            <span className={styles.categories__quantity}>
              ({category.totalItems})
            </span>
          </strong>
        </button>
      ))}
    </nav>
  )
}

export { Categories }
