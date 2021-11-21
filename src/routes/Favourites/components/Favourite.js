import React, { Component } from "react";
import DiscoverBlock from "../../../common/components/DiscoverBlock/DiscoverBlock";
import "../../../routes/Discover/styles/_discover.scss";

export default class Favourite extends Component {
  constructor() {
    super();

    this.state = {
      favourites: [],
    };
  }

  render() {
    const { favourites } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="FAVOURITES" id="favourites" data={favourites} />
      </div>
    );
  }
}
