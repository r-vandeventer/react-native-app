import React from 'react';
import './_discover-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart
} from '@fortawesome/free-solid-svg-icons';

export default function DiscoverItem({ images, name }) {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">
        {name}
        <button className="discover-item__button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </p>
    </div>
  );
}
