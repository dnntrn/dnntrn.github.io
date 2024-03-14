import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const CartAndCheckout: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>New Cart & Checkout Experience</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Season Health. Season allowed users to purchase groceries through their platform and they were expanding the product 
                    to offer multiple carts and checkout options. This was needed to serve a wider cohort of patients across the US (patients in different localities, patients with grocery store preferences, etc).
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>V1 (public)</h2>
                <div className="block md:flex gap-4">
                    <Image
                        src="/images/projects/checkout.png"
                        alt="cart"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full md:w-[30%] h-auto m-auto"
                    />
                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <p>
                            Upon checking out, the user can see all active carts in a modal (similar to Instacart). Before, this modal did not exist and users
                            had to check out each cart individually.
                        </p>

                        <p className='font-bold mt-4'>Requirements:</p>
                        <ul className='ml-10'>
                            <li> cart item displays subtotal and delivery estimates as well as previews of items for that cart</li>
                            <li>cart items instantly update as more items are added and more carts are added</li>
                        </ul>
                    </div>

                </div>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>V2 (Not Yet Deployed, Most Work Completed)</h2>
                <p>Previously, users could only check out on Season using Instacart. With V2, the checkout flow is expanded to include additional checkout options.</p>
                <p className='font-bold mt-4'>Requirements:</p>
                <ul className="ml-10">
                    <li>In the Grocery Cart, users are now able to select multiple options (Instacart, Walmart, self-shop, etc)</li>
                    <li>If Instacart is selected, users see options for specific grocery stores based on location and availability (Wegmans, Shoprite, etc)</li>
                </ul>

                <p className="caption text-center my-6">
                    NOTE: This is a simplified flow chart of the new checkout flow, but this is the general gist of things.
                </p>
                <Image
                    src="/images/projects/checkout-flow-chart.png"
                    alt="cart"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[50%] h-auto m-auto"
                />
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <ul className='ml-10'>
                    <li>
                        <span className='font-bold'>V1:</span> Users have a more simplified and less confusing checkout experience.
                    </li>
                    <li>
                        <span className='font-bold'>V2 (expected):</span> Users have more vendor options leading to higher ratings per meal and a lower cost to the user.
                        This would result in more healthy meals per order which would improve our clinical outcomes per patient.
                        The new checkout options would be self-service and this would greatly reduce the company costs per order.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Difficult Tasks</h2>
                <p>
                    Since the cart and checkout were such important areas of our product, it was 
                    essential that we had a quick and seamless flow. This was difficult due to the different types of information we needed to fetch and share across the flow.
                </p>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2 flex-wrap">
                    <Chip text='React' />
                    <Chip text='Typescript' />
                    <Chip text='React Query' />
                    <Chip text='Formik' />
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default CartAndCheckout