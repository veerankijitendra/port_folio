import React, { useContext } from "react";
import { MainContext } from "../contexts/Contexts";
import "./style.css";

const Header = () => {
  const { theme, updateTheme, headersData } = useContext(MainContext);
  const handleToggleChange = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full flex gap-4 justify-between bg-neutral-600 p-4 h-16">
      <div className="aspect-square shrink-0 w-16 rounded-4xl bg-amber-300" />
      <div className="flex items-center gap-4 ">
        {headersData?.map((each) => {
          return (
            <div key={each.title} className="cursor-pointer  main-con">
              <p>{each.title}</p>
              <div className="box"></div>
            </div>
          );
        })}
        <label className="inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            onChange={handleToggleChange}
            className="sr-only peer"
            checked={theme === "light"}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
