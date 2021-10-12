import { useEffect, useState } from 'react'
import Axios from 'axios'

// Components
import { CategoryItem } from '@components/CategoryItem/CategoryItem'

// Types
import { Category } from '@models/categories'

// Styles
import styles from './CategoryList.module.scss'

const CategoryList = (): JSX.Element => {
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
      {categories?.map((category, index) => (
        <CategoryItem key={index} {...category} />
      ))}
    </nav>
  )
}

export { CategoryList }
