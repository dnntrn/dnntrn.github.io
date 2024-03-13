'use client'
import type { NextPage } from 'next'
import { universialMotionVariant } from '../motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Chip from '../components/chip';

const IntermittentMesaging: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-20 mb-14'>Intermittent Messaging</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>This project was built for Season Health. Season&apos;s users were keeping in touch with our providers through email. We wanted to build an in-app messaging option to push our users to use our platform and to make management easier on our dietitians.</p>
                <p className="caption text-center my-6">NOTE: I could not get screenshots of this work. This is a mockup.</p>
                <Image
                    src="/images/projects/intermittent-messaging.png"
                    alt="intermittent messaging chat window"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[80%] h-auto m-auto"
                />
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold'>highlights of the hard stuff:</h2>
                <ul className='list-disc ml-10 flex flex-col gap-1'>
                    <li>
                        <span className="font-bold">Showing A Lot of Messages:</span> users may have a long message history. 
                        We had to make sure that this message history was available but that 
                        the most recent unviewed message was highlighted first
                    </li>
                    <li>
                        <span className="font-bold">Structuring Data:</span> we had to think carefully about how the backend would return data 
                        to the frontend and how the frontend would be structured since we had multiple components 
                        that needed similar data (last message sent, unread state, etc)
                    </li>
                </ul>
            </section>
            

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>
                    Providers can view and messages in our EHR while patients can view and send messages in-app. 
                    Communication between our users and providers improved greatly, making it easier for us to collect health data for our metrics.
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2">
                    <Chip text='React' />
                    <Chip text='Typescript' />
                    <Chip text='React Query' />
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default IntermittentMesaging