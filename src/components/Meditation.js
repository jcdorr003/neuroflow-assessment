import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import styles from "./Meditation.css";

const Meditation = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "meditation";
  });
  const meditationAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className={styles.card}>
        <div className={styles.container}>
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className={styles.wrapper}>{meditationAudio}</div>;
};

export default Meditation;
