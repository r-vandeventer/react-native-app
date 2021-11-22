import React, { useContext } from "react";
import "./_discover-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../../state";

export const DiscoverItem = ({ id, images, name }) => {
  const [state, dispatch] = useContext(AppContext);

  const handleFavouriteClicked = () => {
    if (
      state.favourites !== undefined &&
      state.favourites.length !== 0 &&
      state.favourites.find((f) => f.id === id)
    ) {
      var removeFavourite = state.favourites.find((f) => {
        return f.id === id;
      });

      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: removeFavourite });
    } else {
      const newFavourite = state.newReleases.find((nr) => {
        return nr.id === id;
      });

      dispatch({
        type: "ADD_TO_FAVOURITES",
        payload: newFavourite,
      });
    }
  };

  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">
        {name}
        <button className="discover-item__button">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleFavouriteClicked()}
          />
        </button>
      </p>
    </div>
  );
};

export default DiscoverItem;
