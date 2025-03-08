import React, { useState } from "react";
import { MainContext, TTheme } from "./Contexts";
import { ISections } from "../utils/constants";

const MainContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TTheme>("light");
  const [headers, setHeaders] = useState<ISections[]>([]);

  const updateTheme = (theme: TTheme) => {
    setTheme(theme);
  };

  const updateHeaderData = (data: ISections[]) => {
    setHeaders(data);
  };

  return (
    <MainContext.Provider
      value={{
        theme,
        updateTheme,
        headersData: headers,
        updateHeadersData: updateHeaderData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
