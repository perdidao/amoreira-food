import React from 'react'

// Nextjs related
import type { NextPage } from 'next'

// Components
import { CustomHead } from '@components/CustomHead/CustomHead'
import { HeroSection } from '@components/HeroSection/HeroSection'
import { CategoryList } from '@components/CategoryList/CategoryList'
import { StoreList } from '@components/StoreList/StoreList'

const Home: NextPage = () => {
  return (
    <div className="page">
      <CustomHead />

      {/* Content */}
      <HeroSection />
      <CategoryList />
      <StoreList />
    </div>
  )
}

export default Home
