import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import styles from "./Relaxation.css";

const Relaxation = props => {
  const filteredData = props.data.filter(data => {
    return data.category.toLowerCase() === "relaxation";
  });
  const relaxationAudio = filteredData.map((d, i) => (
    <>
      <div key={i} className={styles.card}>
        <div className={styles.container}>
          <Link className={styles.link} to={`/details/${d.id}`}>
            {d.label}
          </Link>
          <ReactAudioPlayer controls src={d.url} />
        </div>
      </div>
    </>
  ));

  return <div className={styles.wrapper}>{relaxationAudio}</div>;
};

export default Relaxation;
