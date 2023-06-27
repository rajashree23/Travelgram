import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, dataInitialState } from "../../reducer/data/DataReducer";
import { getPosts } from "../../services/data/postService";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);
  useEffect(() => {
    getPosts(dispatch);
  },[]);

  return (
    <DataContext.Provider value={{ posts: state.posts, dispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
