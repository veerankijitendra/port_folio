import { createContext } from "react";
import { ISections } from "../utils/constants";

export type TTheme = "light" | "dark";

interface IContextState {
  theme: TTheme;
  updateTheme: (theme: TTheme) => void;
  headersData: ISections[];
  updateHeadersData: (data: ISections[]) => void;
}

const initailsState: IContextState = {
  theme: "light",
  headersData: [],
  updateTheme: () => {},
  updateHeadersData: () => {},
};

export const MainContext = createContext<IContextState>(initailsState);
