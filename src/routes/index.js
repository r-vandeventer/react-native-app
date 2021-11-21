import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../state";
import Discover from "./Discover";
import Favourite from "./Favourites";

export default function Routes() {
  const [state, dispatch] = useContext(AppContext);
  const [route, setRoute] = useState("/");
  // Here you'd return an array of routes
  useEffect(() => {
    setRoute(state.route);
  }, [state.route]);

  return route === "/" ? <Discover /> : <Favourite />;
}
