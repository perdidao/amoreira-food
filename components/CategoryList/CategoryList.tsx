import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Category } from '@models/categories'
import styles from './CategoryList.module.scss'
import { CategoryItem } from '@components/CategoryItem/CategoryItem'

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
