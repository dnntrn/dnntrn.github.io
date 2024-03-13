import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Chip from "./chip";

type Props = {
    isCondensed?: boolean;
    title?: string;
    company?: string;
    companyWebsite?: string;
    location: string;
    date?: string;
    companyDescription?: string;
    keyTechnologies?: string[];
    responsibilities: string[];
}

const Role = ({ isCondensed, title, company, companyWebsite, location, date, companyDescription, keyTechnologies, responsibilities }: Props) => {
    if (isCondensed) {
        return (
            <div className="w-full resume-description">
                <div className="flex gap-4">
                    <div className="my-auto">
                        <FontAwesomeIcon width={10} icon={faLocationDot} className="inline mr-2 my-auto" />
                        {location}    
                    </div>
                    {companyWebsite && (
                        <div>
                            <a href={companyWebsite} target="_blank">{companyWebsite}</a>
                        </div>
                    )}
                </div>
                
                <ul className="mt-3 list-disc ml-10">
                    {responsibilities.map((r) => (
                        <li className="mb-2" key={r}>{r}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                    {keyTechnologies && (
                        keyTechnologies.map((tech) => (
                            <Chip key={tech} text={tech} />
                        ))
                    )}
                </div>
            </div>
        )
    }
    return (
        <div className="w-full resume-description">
            <div className="flex w-full justify-between">
                <div>
                    <div className="resume-role-title">{title}</div>
                    
                    
                    <div>
                        <span className="resume-role-company">
                            {companyWebsite ?
                                <a href={companyWebsite} target="_blank">{company}</a> :
                                <>{company}</>
                            }
                        </span> - {location}</div>
                </div>
                <div>{date}</div>
            </div>
            {companyDescription && <p className="mt-2 mb-1">{companyDescription}</p>}
            {keyTechnologies && <p>Key Technologies: {keyTechnologies.join(", ")}</p>}
            <ul className="mt-3 list-disc ml-6 md:ml-10">
                {responsibilities.map((r) => (
                    <li className="mb-2" key={r}>{r}</li>
                ))}
            </ul>
        </div>
    )
}

export default Role