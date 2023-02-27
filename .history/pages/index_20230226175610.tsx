import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Mike Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='p-10 text-red-500'>Hey fam lets build an awesome portfolio</h1>
      
    </div>
  )
}

export default Home;