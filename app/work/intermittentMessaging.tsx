import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const IntermittentMesaging: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>Intermittent Messaging</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>This project was built for Season Health. Season&apos;s users were previously contacting our providers through email. We wanted to build an in-app messaging option to push our users to use our platform and to make management easier for our dietitians.</p>
                <p className="caption text-center my-6">NOTE: I could not get screenshots of this work. This is a mockup.</p>
                <Image
                    src="/images/projects/intermittent-messaging.png"
                    alt="intermittent messaging chat window"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[80%] h-auto m-auto"
                />
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold'>Difficult Tasks</h2>
                <ul className='list-disc ml-10 flex flex-col gap-1'>
                    <li>
                        <span className="font-bold">Showing A Lot of Messages:</span> Users may have a long message history. 
                        We needed to make sure that this message history was available but 
                        the most recent unviewed message was displayed first.
                    </li>
                    <li>
                        <span className="font-bold">Structuring Data:</span> Since this feature consisted of multiple components 
                        that had shared data (last message sent, unread state, etc), we had to think carefully about the structure of the data returned from the backend and the structure of the frontend data.
                    </li>
                </ul>
            </section>
            

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>
                    Providers can view and messages in our EHR while patients can view and send messages in-app. 
                    Communication between our users and providers improved greatly, making it easier for us to collect health data for our metrics.
                    This was essential since our contracts were dependent on these metrics improving.

                    Providers had an easier time managing patient messages.
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2 flex-wrap">
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