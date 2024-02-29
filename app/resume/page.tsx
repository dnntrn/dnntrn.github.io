import type { NextPage } from 'next'
import Head from 'next/head'
import InfoColumn from './infoColumn'
import ExperienceColumn from './experienceColumn'

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Deanna Tran Resume</title>
        <meta name="description" content="Deanna Tran resume" />
        <link rel="icon" href="/favicon.ico" />
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main className="max-w-[960px] mx-auto p-5 mb-5 my-5 shadow-[0_1rem_3rem_rgba(0,0,0,.175)] flex gap-3">
        <InfoColumn />
        <ExperienceColumn />
      </main>
    </div>
  )
}

export default Resume