import Head from 'next/head'
import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <SocialIcons />
      <Email />
    </div>
  )
}
