import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    icon: IconDefinition;
    title: string;
    subtitle: string;
    link: string;
}
const InterestPill = ({ icon, title, subtitle, link }: Props) => {
  return (
    <a href={link} target="_blank" className='bg-white p-6 items-center rounded-[40px] flex gap-4 font-lato'>
        <FontAwesomeIcon icon={icon} size="2xl" className="text-dusty-pink"/>
        <div>
            <p className="text-t-mobile font-bold">{title}</p>
            <p>{subtitle}</p>
        </div>
    </a>
    
  )
}

export default InterestPill