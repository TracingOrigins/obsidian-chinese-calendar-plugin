import {createContext} from "react";
import ChineseCalendarPlugin from "../main";

export const PluginContext = createContext<ChineseCalendarPlugin | undefined>(undefined);
