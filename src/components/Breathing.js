import React from "react";
import "./Breathing.css";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

const Breathing = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "breathing";
  });
  const breathingAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className="wrapper">{breathingAudio}</div>;
};

export default Breathing;
