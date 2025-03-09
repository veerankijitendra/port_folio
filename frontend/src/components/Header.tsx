import "./style.css";
import { useMainContext } from "../hooks/useMainContext";
import Mode from "./Mode";
import { useEffect, useState } from "react";

const Header = () => {
  const { headersData } = useMainContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };
  if (!headersData) return <></>;

  return (
    <header
      className={`w-full h-fit sm:h-20 grid grid-cols-12 sm:grid-rows-1  gap-4 justify-between  shadow fixed z-10 bg-theme responsive-container left-[50%] -translate-x-[50%]`}
    >
      <div className="h-20 w-20 shrink-0">
        <img
          src={headersData.logo.source}
          alt="image"
          className="object-full h-full  aspect-square scale-75 rounded-full brightness-90 contrast-120 saturate-150 drop-shadow-xl"
        />
      </div>
      <div className="hidden sm:flex items-center gap-4 col-start-6 col-end-10 pt-8">
        {headersData?.sections?.map((each) => {
          return (
            <button
              key={each.title}
              className="tab-button group relative cursor-pointer  main-con"
            >
              <p>{each.title}</p>
              <div className="absolute h-0.5 -bottom-1 left-0 w-full  bg-gray-900   dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </button>
          );
        })}
      </div>
      <div className="col-start-12 col-end-13 hidden sm:flex justify-center items-center pt-8">
        <Mode className="flex" />
      </div>
      <div className="col-start-11 col-end-13 flex justify-end items-center">
        <button
          onClick={handleClick}
          className="py-1.5 px-4 h-10 sm:hidden text-sm font-medium text-white rounded bg-gray-900  dark:bg-white focus:outline-none"
        >
          <i className="fa-solid fa-bars text-white dark:text-gray-900"></i>
        </button>
      </div>
      <div
        className={` col-start-1 col-end-13 overflow-clip transition-all duration-1000 ease ${
          isExpanded ? "h-44 pb-8" : "h-0"
        }`}
      >
        <div className=" flex flex-col sm:hidden items-center gap-2 ">
          {headersData?.sections?.map((each) => {
            return (
              <button
                key={each.title}
                className="tab-button group relative cursor-pointer  main-con"
              >
                <p>{each.title}</p>
                <div className="absolute h-0.5 -bottom-1 left-0 w-full  bg-gray-900   dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
              </button>
            );
          })}
          <Mode className="self-center sm:hidden mt-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
