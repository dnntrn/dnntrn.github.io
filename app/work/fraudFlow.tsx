import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const FraudFlow: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>Fraud Flow</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Ellevest. One of the legal requirements of an investment company is to verify clients&apos; 
                    identity and make sure they are not bad actors that are barred from financial activity. Previously, Ellevest&apos;s 
                    processes for these checks was very manual and long which resulted in many users dropping off during onboarding. 
                    We wanted to revamp this flow.
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Before:</h2>
                <p>
                    Before this project, users were asked to upload a bank statement and then wait over a week for manual verification. 
                    They received no other information from us and would often reach out to our customer service team with questions. 
                    Our customer service team would also need to reach out for more documents depending on their type of restriction.
                </p>
                <div className='mt-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Image
                            src="/images/projects/upload-bank-statement.png"
                            alt="old Ellevest upload bank statement screen"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full md:w-[80%] h-auto m-auto"
                        />
                        <Image
                            src="/images/projects/upload-successful.png"
                            alt="old Ellevest upload successful screen"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full md:w-[80%] h-auto m-auto"
                        />
                    </div>
                
                    <Image
                        src="/images/projects/old-ellevest-dashboard.png"
                        alt="old Ellevest dashboard"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full md:w-[50%] h-auto mt-6 mx-auto"
                    />
                </div>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>After:</h2>
                <p>
                    After the project shipped, users were asked to upload specific documents depending on their restriction(s) without contacting our Customer Service team.
                    In the new fraud flow, users could upload documents without worrying about the underlining restriction(s) causing their account to be locked since
                    this information was often confusing and unhelpful to the end user. Users were also then shown the status of their restricted state, so they could
                    monitor their documents&apos; progress without reaching out to our Customer Service team.
                </p>
                <Image
                    src="/images/projects/new-fraud-flow.png"
                    alt="new Ellevest fraud flow"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[80%] h-auto mt-6 mx-auto"
                />
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Difficult Tasks</h2>
                <p>
                    Ellevest users&apos; restriction states came from several fraud verification vendors that we had to normalize. 
                    This logic was complicated and hard to structure into clean code.
                </p>
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>
                    This project was hugely impactful. It resulted in a 4% increase in membership conversion, 20% increase in 10 day funding rate, and a 2-day reduction in the time 
                    users spent in a fraud restricted state. This was a huge win for me and my team.
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2 flex-wrap">
                    <Chip text='React' />
                    <Chip text='Javascript' />
                    <Chip text='React Native' />
                    <Chip text='Redux' />
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default FraudFlow