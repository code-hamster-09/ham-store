import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import React from 'react'

const Home = () => {
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

export default Home
