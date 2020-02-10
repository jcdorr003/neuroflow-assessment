import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./AllAudio.css";

const AllAudio = props => {
  console.log("this is props", props);

  const allAudio = props.data.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <h3>{d.label}</h3>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));
  return <div className="wrapper">{allAudio}</div>;
};

export default AllAudio;
