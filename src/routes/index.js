import React, { useContext } from "react";
import { AppContext } from "../state";
import Discover from "./Discover";
import Favourite from "./Favourites";

export default function Routes() {
  const [state, dispatch] = useContext(AppContext);

  return state.route === undefined ? (
    <Discover />
  ) : state.route === "/" ? (
    <Discover />
  ) : (
    <Favourite />
  );
}
