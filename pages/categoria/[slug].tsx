import React, { useEffect, useState } from 'react'
import Axios from 'axios'

// Nextjs related
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

// Components
import { CustomHead } from '@components/CustomHead/CustomHead'

// Types
import { Category } from '@models/categories'

const CategoryUnique: NextPage = () => {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>()
  const [currentCategory, setCurrentCategory] = useState<Category>()

  const {
    query: { slug },
  } = router

  const _fetchCategories = (): void => {
    Axios.get('/api/categories').then((response) => {
      setCategories(response.data)
    })
  }

  useEffect(() => {
    if (categories) return
    _fetchCategories()
  }, [categories])

  useEffect(() => {
    if (!categories) return

    const selected = categories.filter((category) => category.slug === slug)
    setCurrentCategory(selected[0])
  }, [categories, slug])

  return (
    <div className="page page--spaced">
      <CustomHead titlePrefix={currentCategory?.title} />

      <h1>
        <Image
          src={`/assets/icons/categories/${slug}.png`}
          alt={currentCategory?.title}
          aria-hidden="true"
          layout="intrinsic"
          width="40"
          height="40"
        />
        {currentCategory?.title}
      </h1>
    </div>
  )
}

export default CategoryUnique
