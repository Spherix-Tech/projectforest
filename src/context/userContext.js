import { createContext } from "react";
import { getAuthInfoObj } from "../services/localStorage";

export const UserContext = createContext(getAuthInfoObj());
