import { useMainContext } from "../hooks/useMainContext";
import Social from "./Social";

const Footer = () => {
  const { footerData } = useMainContext();

  if (!footerData) return;
  return (
    <footer
      className={`grid grid-cols-12 gap-4 inset-shadow-xs  py-16 bg-theme p-4 `}
    >
      {/* Section one */}
      <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-3">
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <h4 className="font-bold">{footerData.moreLinksTitle}</h4>
          <div className="flex flex-col gap-2">
            {footerData.moreLinks.map((link) => (
              <a className="text-center cursor-pointer" key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Section two */}
      <div className="col-start-1 col-end-13 md:col-start-3 md:col-end-10">
        <div className="flex  flex-col gap-4 items-center justify-center">
          <h3 className="text-center">{footerData.introText}</h3>
          <button className="text-center cursor-pointer">
            {footerData.buttonText}
          </button>
          <p className="text-center">{footerData.description}</p>
        </div>
      </div>
      {/* Section three */}
      <div className="col-start-1 col-end-13 md:col-start-10 md:col-end-13">
        <div className="flex flex-col justify-center items-center gap-4  h-full">
          <h4 className="text-center font-bold">Social</h4>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
