import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
    image: StaticImageData;
    title: string;
    description: string;
    details?: string;
}
const Project = ({ image, title, description, details }: Props) => {
  return (
    <button className="p-6 rounded-4xl w-[80%] m-auto lg:w-[350px] h-80 bg-[rgba(255,255,255,.2)] hover:origin-top hover:-translate-y-6 ease-in-out duration-300 hover:shadow-around hover:shadow-white">
        <Image
          src={image}
          alt="blah"
          height={150}
          className="m-auto mb-4"
        />
        <h3 className="font-poppins font-[400]">{title}</h3>
        <p>{description}</p>
        <p>{details}</p>
    </button>
  )
}

export default Project