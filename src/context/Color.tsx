import { createContext, useContext } from "react";

// 1. Create the context with a default value (can be empty string)
export const Color = createContext<string>("");

// 2. Optional: Create a custom hook for easier usage
export const useColorContext = () => useContext(Color);
