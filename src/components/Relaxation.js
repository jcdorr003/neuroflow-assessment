import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Relaxation = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "relaxation";
  });
  const relaxationAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <h3>{d.label}</h3>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className="wrapper">{relaxationAudio}</div>;
};

export default Relaxation;
