import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home: NextPage = () => {

  return (
    <div className='bg-[rgb(36,36,36)] text-white'>
      <Head>
        <title>Mike Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />

      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </div>
  )
}

export default Home;