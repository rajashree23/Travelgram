import { createContext, useContext, useReducer } from "react";
import { DataReducer, dataInitialState } from "../../reducer/data/DataReducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
