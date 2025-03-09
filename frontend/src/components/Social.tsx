import { FC } from "react";
import { useMainContext } from "../hooks/useMainContext";
interface IProps {
  className?: string;
}

const Social: FC<IProps> = ({ className = "" }) => {
  const { footerData } = useMainContext();

  if (!footerData) return <></>;

  return (
    <div className={`${className} flex gap-4`}>
      {footerData.socialLinks.map((link) => (
        <a
          key={link.url}
          target="_blank"
          href={link.url}
          className="w-12 aspect-square flex justify-center items-center rounded-4xl bg-gray-900  dark:bg-white"
        >
          <i
            className={`${link.icon} text-white dark:text-gray-900 text-2xl`}
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
