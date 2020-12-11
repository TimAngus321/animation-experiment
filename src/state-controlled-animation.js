import React, { Component, useRef, useEffect } from "react";
import { TimelineLite, CSSPlugin, gsap, timeline } from "gsap";
import { allOfMySkills } from './my-skills.js';
import { random } from "gsap/gsap-core";

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
    y: '-10%',
  }

  const tl = gsap.timeline();



const StateControlledAnimation = () => {


    // useEffect(() => {
    //     gsap.to(
    //     ".animated-skills-container > div > p",
    //     {y: '95%',
    //     stagger: {
    //         each: 0.7,
    //         from: "random",
    //         repeat: -1,
    //       }, 
    //       duration: 4,
    // });
    //   gsap.to(".fullstack",
    //   {y: '100%',
    //   stagger: {
    //   rotation: -90,
    //   transformOrigin: "center",
    //   repeat: -1,
    //   each: 0.7,
    //   from: "random",
      
    //   },
    //   duration: 1,
    // },
    
    // )
    // })

    useEffect(() => {
      gsap.to(".animated-skills-container > div > p", { 
        y: '95%',
        stagger: {
          each: 0.7,
          from: "random",
          repeat: -1,
        }, 
          duration: 4,
          })
    });
    gsap.to(".animated-skills-container > div > p", {
      stagger: {
        rotation: 0, 
        transformOrigin: '0px 0% 0',
        repeat: 0,
      }
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