import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import styles from "./AudioDetails.css";

const AudioDetails = props => {
  console.log("this is params", props.match.params.id);

  console.log("this is props", props);

  let audioId = props.match.params.id;

  const filteredData = props.data.filter(data => {
    return data.id == audioId;
  });

  console.log("filtered data", filteredData);

  const singleAudio = filteredData.map(d => {
    return (
      <>
        <h1>{d.label}</h1>
        <h3>Speaker: {d.speaker}</h3>
        <ReactAudioPlayer
          className={styles.ReactAudioPlayer}
          src={d.url}
          controls
        />
        <p> {d.description}</p>
      </>
    );
  });

  return <div className={styles.wrapper}>{singleAudio}</div>;
};

export default AudioDetails;
