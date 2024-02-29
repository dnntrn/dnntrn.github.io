type Props = {
    title: string;
    company: string;
    location: string;
    date: string;
    companyDescription?: string;
    keyTechnologies?: string;
    responsibilities: string[];
}

const Role = ({ title, company, location, date, companyDescription, keyTechnologies, responsibilities }: Props) => {
  return (
    <div className="w-full resume-description">
        <div className="flex w-full justify-between">
            <div>
                <div className="resume-role-title">{title}</div>
                <div><span className="resume-role-company">{company}</span> - {location}</div>
            </div>
            <div>{date}</div>
        </div>
        {companyDescription && <p className="mt-2 mb-1">{companyDescription}</p>}
        {keyTechnologies && <p>Key Technologies: {keyTechnologies}</p>}
        <ul className="mt-3 list-disc ml-10">
            {responsibilities.map((r) => (
                <li className="mb-2" key={r}>{r}</li>
            ))}
        </ul>
    </div>
  )
}

export default Role