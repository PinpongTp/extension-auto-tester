import React from "react";
import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const CardFill = (props: any) => {
  return (
    <div className="card" style={{ gridTemplateColumns: "9fr 3fr" }}>
      <div
        className="card-content"
        style={{ display: "flex", alignItems: "center" }}
        onClick={props.onFill}
      >
        <p>{props.fillSetName}</p>
      </div>
      <div className="left-group-btn" onClick={props.onEdit}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

CardFill.propTypes = {
  onFill: PropTypes.func,
  onEdit: PropTypes.func,
  fillSetName: PropTypes.string,
};
