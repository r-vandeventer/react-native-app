import React, { useContext, useState, useEffect } from "react";
import DiscoverBlock from "../../../common/components/DiscoverBlock/DiscoverBlock";
import "../../../routes/Discover/styles/_discover.scss";
import { AppContext } from "../../../state";

export const Favourite = () => {
  const [state, dispatch] = useContext(AppContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    state.favourites === undefined
      ? setFavourites(state.favourites)
      : setFavourites([]);
  }, [state.favourites]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="FAVOURITES"
        id="favourites"
        data={favourites ? favourites : []}
      />
    </div>
  );
};

export default Favourite;
