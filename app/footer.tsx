import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { contacts } from "./copy";

const Footer = () => {
  return (
    <footer className="flex gap-4 pt-80 pb-10 text-t-mobile items-center justify-center">
        <a href={contacts.linkedin.link} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="xl" width={30} className="hover:text-dusty-pink" />
        </a>
        <a href={contacts.email.link} target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="xl" width={30} className="hover:text-dusty-pink" />
        </a>
    </footer>
    
  )
}

export default Footer