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
  }

  const tl = gsap.timeline();



const StateControlledAnimation = () => {
    useEffect(() => {
        gsap.to(".frontend", {y: '100%',
        stagger: {
            each: 0.7,
            from: "random",
            repeat: -1,
          } 
    
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