import React from "react";
import "./Breathing.css";
import ReactAudioPlayer from "react-audio-player";

const Breathing = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "breathing";
  });
  const breathingAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <h3>{d.label}</h3>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className="wrapper">{breathingAudio}</div>;
};

export default Breathing;
