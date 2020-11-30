import React, { Component, useRef, useEffect } from "react";
import { TimelineLite, CSSPlugin, gsap, timeline } from "gsap";
import { allOfMySkills } from './my-skills.js';

const skillSetStyle = {
    display: 'flex',
    flexDirection: 'row',
  }
  
  const individualSkillStyle = {
    transform: 'rotate(90deg)', 
    transformOrigin: '0px 0% 0',
    margin: 0,
    padding: 0,
    height: '100vh',
  }

  const tl = gsap.timeline();



const StateControlledAnimation = () => {

    useEffect(() => {
        // gsap.from(".frontend",)
        gsap.to(
        ".animated-skills-container > div > p", 
        {y: '100%',
        stagger: {
            each: 0.7,
            from: "random",
            repeat: -1,
          }, 
          duration: 4,
    });
    })

    return (
        <div className="animated-skills-container">
        {allOfMySkills.map(({skillset, id}) => (
          <div className={id} style={skillSetStyle}>
            {skillset.map((skillset, skills) =>
             <p key={skills} style={individualSkillStyle}>
             {skillset}
             </p>
             )} 
          </div>
        ))
      }
      </div>
    )

};

export default StateControlledAnimation;