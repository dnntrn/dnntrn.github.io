import type { NextPage } from 'next'
import Head from 'next/head'
import InfoColumn from './infoColumn'

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Deanna Tran Resume</title>
        <meta name="description" content="Deanna Tran resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[960px] mx-auto p-5 mb-5 my-5 shadow-lg">
        <InfoColumn />
      </main>
    </div>
  )
}

export default Resume