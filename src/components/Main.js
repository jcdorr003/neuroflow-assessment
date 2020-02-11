import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import json from "../../data/audio_files.json";
import AllAudio from "./AllAudio";
import Meditation from "./Meditation";
import Breathing from "./Breathing";
import Relaxation from "./Relaxation";
import styles from "./Main.css";
import AudioDetails from "./AudioDetails";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = json;
    setData(data);
  }),
    [];

  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" />
        <Route path="/meditation" render={() => <Meditation data={data} />} />
        <Route path="/breathing" render={() => <Breathing data={data} />} />
        <Route path="/relaxation" render={() => <Relaxation data={data} />} />
        <Route path="/all" render={() => <AllAudio data={data} />} />
        <Route
          path="/details/:id"
          render={props => <AudioDetails {...props} data={data} />}
        />
      </Switch>
    </div>
  );
};

export default Main;
