import React from "react";
import { useSelector } from "react-redux";

function EmbedComponent({ title, height,embedId }) {
  const state = useSelector((state) => state);
  
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          height={height}
          width="100%"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${embedId ? embedId : state.courseReducer.youtubeEmbedId}`}
          allowFullScreen
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default EmbedComponent;
