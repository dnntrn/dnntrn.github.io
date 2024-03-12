import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex h-[85vh] text-black justify-center items-center intro">
        <div className="m-auto flex flex-col justify-center text-center">
            <Image
                src="/images/profile.png"
                alt="profile"
                width="200"
                height="0"
                sizes="100vw"
                className="h-auto m-auto"
            />
            <h1 className="text-center font-brittany text-t-mobile text-[4.5rem] md:text-[5rem]">Hi! I&apos;m Deanna.</h1>
            <p className="text-[1.1rem] md:text-[1.3rem] w-[90%] m-auto">
                I&apos;m a Software Engineer based in New York City.
            </p>
            <p className="text-[1.1rem] md:text-[1.3rem] w-[90%] m-auto">
                I&apos;m passionate about building beautiful features that deliver meaningful impact.
            </p>
            
        </div>
    </div>
  )
}

export default Intro