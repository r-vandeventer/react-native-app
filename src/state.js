import { createContext } from "react";

export const initialState = {
  route: "/",
  newReleases: [],
  favourites: [],
};

export const AppContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROUTE":
      return { route: action.payload };
    case "SET_NEW_RELEASES":
      return { newReleases: action.payload };
    case "SET_FAVOURITES":
      return { favourites: action.payload };
    default:
  }
};
