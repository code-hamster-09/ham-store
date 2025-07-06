import Categories from '@/components/Home/Categories'
import FeaturedProducts from '@/components/Home/FeaturedProducts'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Newsletter from '@/components/Home/Newsletter'
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
