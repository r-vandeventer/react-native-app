import { createContext } from "react";

export const initialState = {
  authorized: false,
  authToken: "",
  route: "/",
  newReleases: [],
  favourites: [],
};

export const AppContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ROUTE":
      return { route: action.payload };
  }
};
