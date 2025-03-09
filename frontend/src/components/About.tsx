import { useMemo } from "react";
import { useMainContext } from "../hooks/useMainContext";
import useScrollAnimation from "../hooks/useScollAnimation";

const About = () => {
  const { aboutData } = useMainContext();
  const { ref, isVisible } = useScrollAnimation();

  const className = useMemo(
    () =>
      `transition-all duration-700 transform scale-75 opacity-0 ${
        isVisible ? "scale-100 opacity-100" : ""
      }`,
    [isVisible]
  );
  if (!aboutData) return <></>;
  return (
    <section ref={ref} className={className}>
      <h2 className="text-4xl font-bold text-center pb-6">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6">
        <div className="col-span-1 md:col-span-2 order-2 md:order-1 flex flex-col justify-center gap-4">
          <p>{aboutData.about}</p>
          <button className="self-start">
            <a target="_blank" href={aboutData.resumeLink}>
              Resume
            </a>
          </button>
        </div>
        <div className="h-full flex justify-center items-center order-1">
          <img
            src={aboutData.imageSource}
            alt="image"
            className="w-[min(100%,20rem)] rounded-2xl aspect-square brightness-90 contrast-120 saturate-150 drop-shadow-xl "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
