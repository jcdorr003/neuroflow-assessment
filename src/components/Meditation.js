import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import "./Meditation.css";

const Meditation = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "meditation";
  });
  const meditationAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className="wrapper">{meditationAudio}</div>;
};

export default Meditation;
