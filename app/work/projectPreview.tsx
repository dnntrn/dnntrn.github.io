import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Props = {
    image: string;
    title: string;
    description: string;
    details?: string;
    onClick: () => void;
}
const ProjectPreview = ({ image, title, description, details, onClick }: Props) => {
  return (
    <button onClick={onClick} className="relative p-6 flex gap-4 text-left h-full w-full justify-center items-center rounded-xl m-auto bg-[rgba(255,255,255,.2)] hover:origin-top hover:-translate-y-2 ease-in-out duration-500">
        <Image
          src={image}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[80px] h-auto"
        />
        <div>
          <h3 className="font-bold text-t-mobile">{title}</h3>
          <p className="text-[1rem]">{description}</p>
          <p>{details}</p>
        </div>
        <FontAwesomeIcon className="absolute right-2 top-2 text-white-transparent-3" icon={faArrowUpRightFromSquare} />
    </button>
  )
}

export default ProjectPreview