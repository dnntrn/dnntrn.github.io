import { professionalExperience } from "../copy";
import Accordian from "../components/accordian";
import Role from "../components/role";

const ProfessionalExperience = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 min-h-[16rem]">
        <h2 className='text-center font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] mt-6'>Professional<br className="hidden md:block"></br> Experience</h2>
        <div className='grow flex flex-col gap-2 justify-start'>
            {professionalExperience.map(({title, company, years, companyWebsite, responsibilities, location, keyTechnologies}) => (
                <Accordian key={title} role={`${title} @ ${company}`} year={years} 
                    description={
                        <Role
                            isCondensed
                            companyWebsite={companyWebsite}
                            keyTechnologies={keyTechnologies}
                            location={location}
                            responsibilities={responsibilities}/>
                    } />

            ))}
        </div>       
    </section>
  )
}

export default ProfessionalExperience