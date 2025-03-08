import React, { useContext } from "react";
import { MainContext } from "../contexts/Contexts";
import TypeWriter from "./TypeWriter";

const Home = () => {
  const { homeData } = useContext(MainContext);

  if (!homeData) return <></>;

  return (
    <main className="py-16 w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl font-bold w-fit text-center">{homeData.name}</h1>
      <div className="flex gap-2 items-center">
        <p className="text-2xl font-bold">I am</p>
        <TypeWriter texts={homeData.roles} speed={200} delay={1000} />
      </div>
    </main>
  );
};

export default Home;
