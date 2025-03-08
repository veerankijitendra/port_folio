import React, { useState } from "react";
import { MainContext, TTheme } from "./Contexts";
import {
  TAboutResponse,
  TEducationResponse,
  TFooterResponse,
  THomePageResponse,
  TNavBarRespone,
  TSkillsResponse,
  TSocialResponse,
} from "../utils/types";

const MainContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TTheme>("light");
  const [headers, setHeaders] = useState<TNavBarRespone | null>(null);
  const [homePageData, setHomePageData] = useState<THomePageResponse | null>(
    null
  );
  const [aboutData, setAboutData] = useState<TAboutResponse | null>(null);
  const [skillsData, setSkillsData] = useState<TSkillsResponse | null>(null);
  const [educationData, setEducationData] = useState<TEducationResponse | null>(
    null
  );
  const [socialData, setSocialData] = useState<TSocialResponse | null>(null);
  const [footerData, setFooterData] = useState<TFooterResponse | null>(null);

  const updateTheme = (theme: TTheme) => {
    setTheme(theme);
  };

  const updateHeaderData = (data: TNavBarRespone) => {
    setHeaders(data);
  };

  const updateHomePageData = (data: THomePageResponse) => setHomePageData(data);

  const updateAboutData = (data: TAboutResponse) => setAboutData(data);

  const updateSkillsData = (data: TSkillsResponse) => setSkillsData(data);

  const updateEducationData = (data: TEducationResponse) =>
    setEducationData(data);

  const updateSocialData = (data: TSocialResponse) => setSocialData(data);

  const updateFooterData = (data: TFooterResponse) => setFooterData(data);

  return (
    <MainContext.Provider
      value={{
        theme,
        updateTheme,
        headersData: headers,
        updateHeadersData: updateHeaderData,
        updateHomeData: updateHomePageData,
        homeData: homePageData,
        updateAboutData,
        aboutData,
        skillsData,
        updateSkillsData,
        updateEducationData,
        educationData,
        socialData,
        updateSocialData,
        footerData,
        updateFooterData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
