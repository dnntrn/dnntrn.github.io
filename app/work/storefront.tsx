import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const Storefront: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>Premade Meals Storefront</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Season Health. We added additional premade meal vendors to our site. Previously, 
                    our site only displayed one vendor, but we were moving towards a marketplace of several vendors. 
                    This was difficult because each vendor had different order minimums, delivery date estimates, and 
                    different customer service channels.
                </p>
                <Image
                    src="/images/projects/storefront.png"
                    alt="premade meals storefront"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[80%] h-auto my-6 mx-auto"
                />
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Difficult Tasks</h2>
                <Image
                    src="/images/projects/vendors.png"
                    alt="vendors"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[80%] h-auto my-6 mx-auto"
                />
                <p>Not all users were eligible for all vendors. We had to account for all of these different empty states.</p>
                <Image
                    src="/images/projects/shovelors.png"
                    alt="vendors"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[80%] h-auto my-6 mx-auto"
                />
                <p>Meals were organized into categories but we received the data without labeling structure from the vendors.</p>
                <p>Meals were displayed in scrollable shovelers that needed to be truncated and paginated.</p>
                <div className="grid md: grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <Image
                        src="/images/projects/free-shipping.png"
                        alt="vendors"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto md:h-1/2 m-auto"
                    />
                    <Image
                        src="/images/projects/delivery-note-territory.png"
                        alt="vendors"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto md:h-1/2 m-auto"
                    />
                    <Image
                        src="/images/projects/order-size-date.png"
                        alt="vendors"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto md:h-1/2 m-auto"
                    />
                    <Image
                        src="/images/projects/delivery-note-daily-harvest.png"
                        alt="vendors"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto md:h-1/4 m-auto"
                    />
                </div>
                <p>
                    Each vendor had different shipping costs, order minimums, care instructions, and delivery date estimates. 
                    It was difficult to account for these differences in a reusable way that was not confusing for the user.
                </p>
            </section>
            

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>Users have more premade meal options that may suit their tastes better or their price range better.</p>
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

export default Storefront