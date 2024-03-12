import Image from "next/image";
import { interests, mentoredAt } from "../copy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import InterestPill from "../components/interestPill";

const Bio = () => {
  return (
    <>
        <section className="mt-20">
            <h2 className='font-brittany text-t-mobile text-[4rem]'>Get to know me</h2>
            <div className="p-10 flex flex-col gap-4 transition-all bg-white-transparent rounded-4xl">
                <div className='flex flex-col md:flex-row gap-6 items-center'>
                    <Image
                        src="/images/me-lion.jpg"
                        alt="Me and my cat"
                        width="150"
                        height="0"
                        sizes="100vw"
                    />
                    <div className='flex flex-col gap-4'>
                        <p> I stumbled into coding as a freshman at NYU, and I&apos;ve been hooked ever since. Computer science started as &quot;just an elective&quot;, and soon became my major and passion.</p>
                        <p>I struggled a lot with self-doubt when I first started coding, and I love teaching others how to code by focusing on empathy and the creative aspects of development.</p>
                        <p>Please reach out if you need advice or just an ear to listen! <FontAwesomeIcon className="w-6 inline" color='red' icon={ faHeart } /></p>
                    </div>
                </div>

                <p className='font-poppins text-t-mobile font-bold mt-4'>I&apos;m proud to have taught students with:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    {mentoredAt.map((org) => (
                        <a key={org.link} href={org.link} target="_blank">
                            <Image
                                src={org.src}
                                alt={org.alt}
                                width="200"
                                height="0"
                                sizes="100vw"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
        <section className='-mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-3 md:px-6'>
            {interests.map((interest) => (
                <InterestPill key={interest.title} {...interest} />
            ))}
        </section>
    </>
  )
}

export default Bio