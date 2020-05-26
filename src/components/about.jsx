import React from "react";
import "./about.css";

const About = () => (
  <div className="about-container">
    <h3>A React weather app</h3>
    <p>I am aspiring to be a software engineer </p>
    <p>
      This app is a sample react app using react hooks and weather API's and
      other useful links to help develop a cool UI feel
    </p>
    <h3>App use case</h3>
    <p>user can search for current weather </p>
    <p>
      user can see landmarks of selected city , note currently London,Paris,Rome
    </p>
    <p>displays forcast for 7days at 3hr interval</p>
    <p>
      have a clock to display current time , note only browser specific i.e if
      you in london it will only show you the current time in london
    </p>
  </div>
);

export default About;
