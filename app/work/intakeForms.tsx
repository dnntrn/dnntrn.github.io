import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const IntakeForms: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>Intake Forms</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Season Health.

                    Previously, our product was only available to patients through our contracts with Payers. These Payers would provide us
                    some information about their patients&apos; health. We pivoted to a D2C offering and needed to collect this information
                    directly in our application. This information needed to be accessible in our own admin application as well as a 
                    third party EHR.
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
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Difficult Tasks</h2>
                <ul className='ml-10'>
                    <li>
                        <span className="font-bold">Data management:</span> The answers we collected needed to be persisted across other forms in the app. We used formik
                        and react query to achieve this.
                    </li>
                    <li>
                        <span className="font-bold">Form Validation:</span> The answers we collected had to be validated under specific restraints, especially when collecting health metrics like A1C.
                        We used Yup for this form validation. We wanted to make sure that all errors displayed would not negatively affect the experience.
                    </li>
                    <li>
                        <span className="font-bold">Third Party EHR:</span> The answers needed to be pushed to our EHR, Healthie. Unfortunately, 
                        their api was very brittle and any subsequent form changes would break this connection. We had to 
                        build the form with this in mind.
                    </li>
                </ul>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>
                    Providers could spend less time per patient since their initial health information was collected in-app instead of verbally in meetings.
                    This reduced the company&apos;s cost for each appointment.
                </p>
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2 flex-wrap">
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