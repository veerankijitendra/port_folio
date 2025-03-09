import { useContext } from "react";
import { MainContext } from "../contexts/Contexts";

export const useMainContext = () => useContext(MainContext);
