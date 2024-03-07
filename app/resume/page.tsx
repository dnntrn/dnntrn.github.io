'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import InfoColumn from './infoColumn'
import ExperienceColumn from './experienceColumn'

const Resume: NextPage = () => {
  const downloadPDF = () => {
    fetch("resume.pdf").then((response) => {
        response.blob().then((blob) => {
            const fileURL =
                window.URL.createObjectURL(blob);
                
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Deanna Tran Resume.pdf";
            alink.click();
        });
    });
  }
  return (
    <div>
      <Head>
        <title>Deanna Tran Resume</title>
        <meta name="description" content="Deanna Tran Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-[960px] m-auto'>
        <button onClick={downloadPDF} className='hover:underline font-lato'>
            Download PDF
        </button>
        <div className="bg-[#ffff] mx-auto p-5 mb-5 my-5 shadow-[0_1rem_3rem_rgba(0,0,0,.175)] flex flex-col md:flex-row gap-3">
          <InfoColumn />
          <ExperienceColumn />
        </div>
      </div>
      
    </div>
  )
}

export default Resume