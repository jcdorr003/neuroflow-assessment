import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import styles from "./AllAudio.css";

const AllAudio = props => {
  const allAudio = props.data.map((d, i) => (
    <>
      <div key={i} className={styles.card}>
        <div className={styles.container}>
          <Link to={`/details/${d.id}`}>{d.label}</Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));
  return <div className={styles.wrapper}>{allAudio}</div>;
};

export default AllAudio;
