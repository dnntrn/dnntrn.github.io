
const Page = () => {
  return (
    <div>
        <div className="bg-[#FDF1F2] h-[100vh] flex p-10 justify-center items-center">
                <div className="m-auto w-[70%] flex flex-col justify-center text-center">
                    <h1 className="font-bold text-center font-poppins text-[35px]">Hey, I&apos;m Deanna!</h1>
                    <p className="text-[15px] w-[50%] m-auto font-lato font-300">
                        I&apos;m a Frontend Engineer based in New York City. I excel at delivering 0-to-1 projects at warp speed, and I enjoy having a big impact on business and product goals.
                        I try to bring the vibes in every team I&apos;m on. Outside of work, I&apos;m obsessed with cats, books, and trashy tv.
                    </p>
                </div> 

                <ul className="grow">
                    <li>
                        About
                    </li>
                    <li>
                        Resume
                    </li>
                    <li>
                        Portfolio
                    </li>

                </ul>
            </div>
    </div>
  )
}

export default Page