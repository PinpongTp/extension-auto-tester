import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export const CardRandom = (props: any) => {
  return (
    <div className="card">
      <div className="right-group-btn" onClick={props.onRandom}>
        <FontAwesomeIcon icon={faShuffle} />
      </div>
      <div className="card-content" onClick={props.onCopy}>
        <p>{props.randomName}</p>
        <p>{props.randomValue}</p>
      </div>
    </div>
  );
};

CardRandom.propTypes = {
    onRandom: PropTypes.func,
    onCopy: PropTypes.func,
    randomName: PropTypes.string,
    randomValue: PropTypes.string,
};
