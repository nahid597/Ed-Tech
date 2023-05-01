import React from "react";
import "./liveClass.scss";
import EmbedComponent from "../common/embed/embed";
import { liveClasses } from "../../global/liveClasses";

function LiveClassComponent() {
  return (
    <div>
      <h3 className="mt-4">Live Classes</h3>
      <div className="row">
        {liveClasses && liveClasses.map((liveClass, index) => (
          <div key={index} className="col col-md-4 col-sm-12 mt-4">
          <div className="card" style={{ width: "18rem;" }}>
            <EmbedComponent
              title="YouTube Video"
              height="200px"
              embedId={liveClass.embedId}
            ></EmbedComponent>
            <div className="card-body">
              <h5 className="card-title">{liveClass.title}</h5>
              <p className="card-text">{liveClass.text}</p>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default LiveClassComponent;
