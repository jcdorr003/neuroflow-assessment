import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import "./AllAudio.css";

const AllAudio = props => {
  const allAudio = props.data.map((d, i) => (
    <>
      <div key={i} className="card">
        <div className="container">
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));
  return <div className="wrapper">{allAudio}</div>;
};

export default AllAudio;
