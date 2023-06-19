import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import mailLogo from "../assets/mail.svg";
import whatsappLogo from "../assets/whatsapp.svg";

const SocialMedia = () => {
  return (
    <div className="absolute bottom-0 right-2 flex flex-col gap-2">
      <a href="https://www.github.com/BauTancredi" rel="noreferrer" target="_blank">
        <img alt="github link" className="w-24 cursor-pointer invert" src={githubLogo} />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-bautista-tancredi/"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="linkedin link" className="w-24 invert" src={linkedinLogo} />
      </a>
      <a href="mailto:bautistatancredi@hotmail.com">
        <img alt="mail link" className="w-24 invert" src={mailLogo} />
      </a>
      <a href="https://wa.me/541141643790">
        <img alt="whatsapp link" className="w-24 invert" src={whatsappLogo} />
      </a>
    </div>
  );
};

export default SocialMedia;
