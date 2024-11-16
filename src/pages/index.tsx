import { useState } from 'react'

import Head from 'next/head'
import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import Loader from '@/components/Loader'

import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'

// change color palette depending time of day
// localization
// animation
const HEADER_TITLE = 'Manu Pirez'

function Index() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <div className="app">
      <Head>
        <title>{HEADER_TITLE}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default Index
