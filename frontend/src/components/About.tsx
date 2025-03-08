import React, { useContext } from "react";
import { MainContext } from "../contexts/Contexts";

const About = () => {
  const { aboutData } = useContext(MainContext);
  if (!aboutData) return <></>;
  return (
    <div className="l">
      <h2 className="text-4xl font-bold text-center pb-6">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6">
        <div className="col-span-1 md:col-span-2 order-2 md:order-1">
          <p>{aboutData.about}</p>
          <a target="_blank" href={aboutData.resumeLink}>
            <button>Resume</button>
          </a>
        </div>
        <div className="h-full flex justify-center items-center order-1">
          <img
            src={aboutData.imageSource}
            alt="image"
            className="w-[min(100%,20rem)] rounded-2xl aspect-square "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
