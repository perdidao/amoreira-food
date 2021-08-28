import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Category } from '@models/categories'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Image from 'next/image'

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
      <Head>
        <title>{currentCategory?.title} | Amoreira Food</title>
        <meta name="description" content="Teste de aplicação para cardápios" />
      </Head>

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
