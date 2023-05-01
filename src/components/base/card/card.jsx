import React from "react";

function CardComponent({ cardTitle, cardBody, imageUrl }) {
  return (
    <div className="card bg-light mb-3" style={{ width: "100%" }}>
      <div className="card-body row">
      <div className="col col-md-3 col-sm-12">
        <img height="100px" width="100px" src={imageUrl} className="rounded float-left" alt="No-action" />
      </div>
      <div className="col col-md-8 col-sm-12 ml-2">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardBody}</p>
      </div>
      </div>
    </div>
  );
}

export default CardComponent;
