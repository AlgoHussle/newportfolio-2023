import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Home: NextPage = () => {

  return (
    <header className='bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white h-screen snap-y 
                    snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Mike Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />

      </section>

      {/* About */}
      <section>
        <About id="" />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </header>
  )
}

export default Home;