import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skill.css";
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";

 
const Skill = (props) => {
 
  return (
    <div className="flexRow align-center mtb-10">
      {/* <Bounce>  */}
      <div className="skillContainer">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            pathColor: props.pathColor,
          })}
        />
      </div>
      {/* </Bounce> */}
      {/* <Roll> */}
      <div className="mlr-10">
        <p className="res font-16 bold-500 textColor mtb-10">{props.skillName}</p>
      </div>
      {/* </Roll> */}
    </div>
  );
};

export default Skill;
