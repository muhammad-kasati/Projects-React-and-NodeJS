import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:{
    _Id : "65d9fa0424ec31d33ad0e3a8",
    username : "hamza",
    email : "hamza@gamil.com",
    coverPicture : "post/1.jpeg",
    profilePicture : "post/1.jpeg",
    followers : ["65c5b78e16a46f632b94c429"],
    followings : ["65c5b78e16a46f632b94c429"],
    isAdmin : "",
  },
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.clear("user", JSON.stringify(state.user))
  },[state.user])
  localStorage.clear();
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
