import { useContext } from "react";
import { MainContext } from "../contexts/Contexts";
import { Link } from "react-router-dom";

const Footer = () => {
  const { footerData } = useContext(MainContext);
  if (!footerData) return;
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Section one */}
      <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-3">
        <div className="flex flex-col justify-center items-center h-full">
          <h4>{footerData.moreLinksTitle}</h4>
          <div className="flex flex-col bg-amber-300">
            {footerData.moreLinks.map((link) => (
              <Link to={link.url} className="text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Section two */}
      <div className="col-start-1 col-end-13 md:col-start-3 md:col-end-10">
        <div className="flex  flex-col gap-4 items-center justify-center">
          <h3 className="text-center">{footerData.introText}</h3>
          <button className="text-center">{footerData.buttonText}</button>
          <p className="text-center">{footerData.description}</p>
        </div>
      </div>
      {/* Section three */}
      <div className="col-start-1 col-end-13 md:col-start-10 md:col-end-13">
        <div className="flex flex-col justify-center items-center gap-2  h-full">
          <h6 className="text-center">Social</h6>
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => (
              <a
                key={link.url}
                target="_blank"
                href={link.url}
                className="w-12 aspect-square flex justify-center items-center rounded-4xl bg-red-300"
              >
                <i className={`${link.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
