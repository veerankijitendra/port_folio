import { Chrono } from "react-chrono";
import { useMainContext } from "../hooks/useMainContext";
import { useMemo } from "react";
import useScrollAnimation from "../hooks/useScollAnimation";

const Education = () => {
  const { educationData } = useMainContext();
  const { ref, isVisible } = useScrollAnimation();

  const className = useMemo(
    () =>
      `transition-all duration-700 transform scale-75 opacity-0 ${
        isVisible ? "scale-100 opacity-100" : ""
      }`,
    [isVisible]
  );
  if (!educationData) return <></>;
  return (
    <section ref={ref} className={className}>
      <h2 className="text-4xl font-bold py-8 text-center">Education</h2>
      <div className="w-full h-fit">
        <Chrono
          hideControls={true}
          allowDynamicUpdate
          useReadMore={false}
          disableToolbar={true}
          cardHeight={150}
          mode={"VERTICAL_ALTERNATING"}
          items={educationData.education}
        >
          {/* {educationData.education.map((item) => (<div>{item.}</div>))} */}
        </Chrono>
      </div>
    </section>
  );
};

export default Education;
