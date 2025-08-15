import Categories from '@/components/HomePage/Categories'
import FeaturedProducts from '@/components/HomePage/FeaturedProducts'
import Features from '@/components/HomePage/Features'
import Hero from '@/components/HomePage/Hero'
import Newsletter from '@/components/HomePage/Newsletter'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Newsletter />
    </div>
  )
}

export default HomePage
