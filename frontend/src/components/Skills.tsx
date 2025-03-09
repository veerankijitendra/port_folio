import { useMemo } from "react";
import { useMainContext } from "../hooks/useMainContext";
import useScrollAnimation from "../hooks/useScollAnimation";

const Skills = () => {
  const { skillsData } = useMainContext();
  const { ref, isVisible } = useScrollAnimation(0.6);

  const className = useMemo(
    () =>
      `transition-all duration-700 transform scale-75 opacity-0 ${
        isVisible ? "scale-100 opacity-100" : ""
      }`,
    [isVisible]
  );

  if (!skillsData) return <></>;
  return (
    <section ref={ref} className={`${className} overflow-clip w-ful`}>
      <h2 className="text-4xl font-bold pb-6 text-center">Skills</h2>
      <p className="pb-6">{skillsData.intro}</p>
      <div className="grid grid-cols-12 grid-rows-2 gap-y-6 sm:gap-y-16">
        {skillsData.skills.map((skill, idIndex) => (
          <div
            key={skill.title}
            className={
              idIndex === 0
                ? " col-span-12 sm:col-span-6 flex justify-center"
                : idIndex === 1
                ? " col-span-12 sm:col-span-6 flex justify-center"
                : " col-span-12 flex justify-center"
            }
          >
            <div className="flex flex-col gap-4 w-[min(100%,20rem)]">
              <p className="font-semibold">{skill.title}</p>
              <div className="grid grid-cols-4">
                {skill.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <img
                      className="object-contain w-12 aspect-square"
                      src={item.icon}
                      alt={item.title}
                    />
                    <p className="text-xs">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
