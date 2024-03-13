import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const IntakeForms: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-20 mb-14'>Intake Forms</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Season Health. We initially only offered our product to patients 
                    of payers we were contracted with. We pivoted to have a D2C offering and needed to collect 
                    more upfront information about our users&apos; health. This information needed to be accessible 
                    in our own admin application as well as a third party EHR.
                </p>
                <Image
                        src="/images/projects/intake-form.png"
                        alt="cart"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full md:w-[80%] h-auto mx-auto my-6"
                    />
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>What was hard?</h2>
                <ul className='ml-10'>
                    <li>
                        <span className="font-bold">Data management:</span> answers collected needed to be persisted across other forms in the app.
                    </li>
                    <li>
                        <span className="font-bold">Form Validation:</span> answers collected had to be validated, especially when collecting health metrics like A1C
                    </li>
                    <li>
                        <span className="font-bold">Third Party EHR:</span> form answers needed to be pushed to our EHR, Healthie. Unfortunately, 
                        their api was very brittle and any subsequent form changes would break this connection. We had to 
                        build the form with this in mind.
                    </li>
                </ul>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>Providers can spend less time per patient since their initial health information is collected in-app.</p>
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2">
                    <Chip text='React' />
                    <Chip text='Typescript' />
                    <Chip text='React Query' />
                    <Chip text='Formik' />
                    <Chip text='Redux' />
                    <Chip text='Yup' />
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default IntakeForms