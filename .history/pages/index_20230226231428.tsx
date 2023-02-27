import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Home: NextPage = () => {

  return (
    <header className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-white h-screen snap-y 
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
      <section id='about'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </header>
  )
}

export default Home;