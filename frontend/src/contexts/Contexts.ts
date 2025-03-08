import { createContext } from "react";
import {
  TAboutResponse,
  TEducationResponse,
  TFooterResponse,
  THomePageResponse,
  TNavBarRespone,
  TSkillsResponse,
  TSocialResponse,
} from "../utils/types";

export type TTheme = "light" | "dark";

interface IContextState {
  theme: TTheme;
  updateTheme: (theme: TTheme) => void;
  headersData: TNavBarRespone | null;
  updateHeadersData: (data: TNavBarRespone) => void;
  homeData: THomePageResponse | null;
  updateHomeData: (data: THomePageResponse) => void;
  aboutData: TAboutResponse | null;
  updateAboutData: (data: TAboutResponse) => void;
  skillsData: TSkillsResponse | null;
  updateSkillsData: (data: TSkillsResponse) => void;
  educationData: TEducationResponse | null;
  updateEducationData: (data: TEducationResponse) => void;
  socialData: TSocialResponse | null;
  updateSocialData: (data: TSocialResponse) => void;
  footerData: TFooterResponse | null;
  updateFooterData: (data: TFooterResponse) => void;
}

const initailsState: IContextState = {
  theme: "light",
  headersData: null,
  homeData: null,
  aboutData: null,
  skillsData: null,
  educationData: null,
  socialData: null,
  footerData: null,
  updateTheme: () => {},
  updateHeadersData: () => {},
  updateHomeData: () => {},
  updateAboutData: () => {},
  updateSkillsData: () => {},
  updateEducationData: () => {},
  updateSocialData: () => {},
  updateFooterData: () => {},
};

export const MainContext = createContext<IContextState>(initailsState);
