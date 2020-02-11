import React from "react";
import "./Breathing.css";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import styles from "./Breathing.css";

const Breathing = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "breathing";
  });
  const breathingAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className={styles.card}>
        <div className={styles.container}>
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className={styles.wrapper}>{breathingAudio}</div>;
};

export default Breathing;
