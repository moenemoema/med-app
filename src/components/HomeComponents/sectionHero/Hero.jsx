﻿import React from "react";
import s from "./Hero.module.css";
import { useState } from "react";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChange2 = (e) => {
    setMessage2(e.target.value);
  };

  return (
    <section id={s.hero}>
      <div className={s.container}>
        <div className={s.section_hero}>
          <div className={s.hero_left}>
            <h1>
              We care <br /> <span>about your health</span>
            </h1>
            <p>
              Good health is the state of mental, physical and social well being{" "}
              <br /> and it does not just mean absence of diseases.
            </p>
            <span>
              Become member of our hospital community?<a href="#">Sign Up</a>
            </span>
            <div className={s.container_btn}>
              <a>Find a doctor</a>
              <div>
                <input
                  type="text"
                  defaultValue="Name of Doctor"
                  onChange={handleChange}
                  value={message}
                  placeholder="Name of Doctor"
                />
                <input
                  type="text"
                  defaultValue="Speciality"
                  onChange={handleChange2}
                  value={message2}
                  placeholder="Speciality"
                />
                <button>Search</button>
              </div>
            </div>
          </div>
          <div className={s.hero_right}></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
