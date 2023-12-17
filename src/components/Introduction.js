import React, { useState } from "react";
import homepageImage from "../assets/homepage.jpg";
import "../styles/introduction.css";

const Introduction = () => {
  const ACTIVITIES = [
    {
      emoji: "🕹",
      text: "play games",
      animationAttr: "game",
    },
    {
      emoji: "🌀",
      text: "watch anime",
      animationAttr: "swirl",
    },
    {
      emoji: "🎧",
      text: "listen to rap",
      animationAttr: "headphone",
    },
    {
      emoji: "🚗",
      text: "enjoy trips",
      animationAttr: "car",
    },
  ];
  const JOBS = [
    {
      type: "Back-end",
      ratio: "70%",
    },
    {
      type: "Front-end",
      ratio: "15%",
    },
    {
      type: "Infrastructure",
      ratio: "15%",
    },
  ];
  const [noHighFive, setNoHighFive] = useState(false);
  const refreshHighFive = () => {
    setNoHighFive(true);
    setTimeout(() => {
      setNoHighFive(false);
    });
  };

  return (
    <div>
      <img className="homepage-img" src={homepageImage} alt="homepageImage" />
      <h1>
        <span
          className={`waving-hand ${noHighFive ? "-no-high-five" : ""}`}
          onClick={refreshHighFive}
        />
        Hey there! I'm Zhuo Cheng
      </h1>
      <p>
        Software Engineer @{" "}
        <a
          href="https://www.lycorp.co.jp/ja/"
          target="_blank"
          rel="noreferrer noopener"
          className="highlight company-highlight"
        >
          LINEヤフー
        </a>
      </p>
      <p>
        {JOBS.map((job, index) => (
          <React.Fragment>
            {index === 0 && "Currently, "}
            {`${job.ratio} `}
            <span className="highlight text-highlight">{job.type}</span>
            {index !== JOBS.length - 1 && " + "}
          </React.Fragment>
        ))}
      </p>
      <p className="activity">
        When I'm not coding, I ...
        <br />
        {ACTIVITIES.map((activity, index) => (
          <React.Fragment key={activity.text}>
            {index !== 0 && ", "}
            {index === ACTIVITIES.length - 1 && "and "}
            <span
              className="activity-hover-able no-wrap"
              data-emoji={activity.emoji}
              data-animation={activity.animationAttr}
            >
              {activity.text}
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Introduction;
