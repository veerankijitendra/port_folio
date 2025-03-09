import { useMemo } from "react";
import { useMainContext } from "../hooks/useMainContext";
import useScrollAnimation from "../hooks/useScollAnimation";
import TypeWriter from "./TypeWriter";
import Social from "./Social";

const Home = () => {
  const { homeData } = useMainContext();
  const { ref, isVisible } = useScrollAnimation();

  const className = useMemo(
    () => (isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"),
    [isVisible]
  );

  if (!homeData) return <></>;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${className} pt-32 pb-4 w-full flex flex-col gap-4 justify-center items-center`}
    >
      <h1 className="text-5xl font-bold w-fit text-center">{homeData.name}</h1>
      <div className="flex gap-2 items-center">
        <p className="text-2xl font-bold">I am</p>
        <TypeWriter texts={homeData.roles} speed={200} delay={1000} />
      </div>
      <Social className="pt-8" />
    </div>
  );
};

export default Home;
