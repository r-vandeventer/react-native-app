import React, { Component } from 'react';
import DiscoverBlock from '../../../common/components/DiscoverBlock/DiscoverBlock';
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: []
    };
  }

  render() {
    const { newReleases } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      </div>
    );
  }
}
