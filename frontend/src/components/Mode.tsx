import { FC } from "react";
import { useMainContext } from "../hooks/useMainContext";
interface IProps {
  className?: string;
}

const Mode: FC<IProps> = ({ className = "" }) => {
  const { theme, updateTheme } = useMainContext();
  const handleToggleChange = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        className={`${className} cursor-pointer w-10 rounded-4xl aspect-square flex justify-center items-center bg-gray-900  dark:bg-white`}
        onClick={handleToggleChange}
      >
        <i
          className={`fa-solid fa-${
            theme === "light" ? "moon" : "sun"
          }   text-white dark:text-gray-900 text-xl`}
        ></i>
      </button>
    </>
  );
};

export default Mode;
