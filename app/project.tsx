import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    image: IconDefinition;
    title: string;
    description: string;
    details: string;
}
const Project = ({ image, title, description, details }: Props) => {
  return (
    <button className="p-6 rounded-[50px] w-[350px] h-80 bg-[rgba(255,255,255,.2)]">
        <FontAwesomeIcon icon={image} width={60} className="m-auto mb-4" />
        <h3 className="font-poppins font-[400]">{title}</h3>
        <p>{description}</p>
        <p>{details}</p>
    </button>
  )
}

export default Project