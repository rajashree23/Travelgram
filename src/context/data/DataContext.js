import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, dataInitialState } from "../../reducer/data/DataReducer";
import { getPosts } from "../../services/data/postService";
import { ACTION_TYPES } from "../../utils/actionTypeConstants";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);
  useEffect(() => {
    getPosts(dispatch);
    dispatch({ type: ACTION_TYPES.SET_THEME, payload: localStorage.getItem("theme") || "dark" });
  }, []);
console.log(state.theme)
  return (
    <DataContext.Provider
      value={{
        posts: state.posts,
        theme: state.theme,
        loader:state.loader,
        filterOption:state.filterOption,
        postActions:state.postActions,
        dispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
