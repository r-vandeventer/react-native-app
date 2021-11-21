import React, { useState, useContext } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Avatar } from "../../../assets/images/avatar.svg";
import "./_sidebar.scss";
import { AppContext } from "../../../state";

class RenderSideBarOption extends React.Component {
  render() {
    return (
      <div
        className={cx("sidebar__option", {
          "sidebar__option--selected": this.props.selected,
        })}
        onClick={this.props.onClick}
      >
        <FontAwesomeIcon icon={this.props.icon} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export const SideBar = () => {
  const [selected, setSelected] = useState(true);
  const [state, dispatch] = useContext(AppContext);

  const toggleDisplayed = (link) => {
    setSelected(!selected);
    dispatch({ type: "CHANGE_ROUTE", payload: link });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        <RenderSideBarOption
          link="/"
          icon={faHeadphonesAlt}
          text="Discover"
          selected={selected}
          onClick={() => toggleDisplayed("/")}
        />
        <RenderSideBarOption
          link="/favourites"
          icon={faHeart}
          text="Favourites"
          selected={!selected}
          onClick={() => toggleDisplayed("/favourites")}
        />
      </div>
    </div>
  );
};

export default SideBar;
