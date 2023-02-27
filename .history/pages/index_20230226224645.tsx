import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home: NextPage = () => {

  return (
    <header className='linear-gradient(to right, rgb(55,65,81), rgb(17,24,39), rgb()) text-white h-screen snap-y 
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

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </header>
  )
}

export default Home;