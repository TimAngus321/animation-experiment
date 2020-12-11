import React, { Component, useRef, useEffect } from "react";
import { TimelineLite, CSSPlugin, gsap, timeline } from "gsap";
import { allOfMySkills } from './my-skills.js';
import { random } from "gsap/gsap-core";

const skillSetStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px',
  }
  
  const individualSkillStyle = {
    transformOrigin: '0px 0% 0',
    transform: 'rotate(-90deg)', 
    margin: 0,
    padding: 0,
    height: '100vh',
  }

  const tl = gsap.timeline();



class StateControlledAnimationClass extends Component {
    constructor(props){
        super(props)
        this.skillsContainer = null;
        this.fallingAnimations = null;
        // this.allOfMySkills = allOfMySkills;
    }

    componentDidMount(){
        this.fallingAnimations = new TimelineLite()
        .to(this.skillsContainer, { 
            y: '90%',
            stagger: {
                each: 0.7,
                from: "random",
                repeat: -1,
              }, 
            duration: 4,
        })
        .to(this.skillsContainer, {
            rotation: 0, 
            transformOrigin: '0px 0% 0',
            repeat: 0,
        })
    }

    render(){

    return (
            <div className="animated-skills-container">
            {allOfMySkills.map(({skillset, id}) => (
            <div 
            className={id} 
            style={skillSetStyle}
            >
                {skillset.map((skillset, skills) =>
                <p 
                key={skills} 
                style={individualSkillStyle}
                ref={ skills => this.skillsContainer = skills } 
                >
                {skillset}
                </p>
                )} 
            </div>
            ))
        }
        </div>
        )
    }

};

export default StateControlledAnimationClass;