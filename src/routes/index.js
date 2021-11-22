import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../state";
import Discover from "./Discover";
import Favourite from "./Favourites";

export default function Routes() {
  const [state, dispatch] = useContext(AppContext);
  console.log(state.route);
  return state.route === undefined ? (
    <Discover />
  ) : state.route === "/" ? (
    <Discover />
  ) : (
    <Favourite />
  );
}
