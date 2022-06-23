import React from "react";
import Footer from "../Footer/Footer";
import Skill from "../Skill/Skill";
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      skillName: "HTML/CSS",
      value: 90,
      pathColor: "#29d155",
    },
    {
      skillName: "JavaScript",
      value: 85,
      pathColor: "#f9c371",
    },
    {
        skillName: "Bootstrap",
        value: 80,
        pathColor: "#7b33f0d6",
    },
    {
      skillName: "ReactJS",
      value: 70,
      pathColor: "#5e93e1",
    },
    {
      skillName: "FireBase",
      value: 60,
      pathColor: "#3a8f93",
    },
    {
      skillName: "Metarial ui",
      value: 30,
      pathColor: "#ec3f9f",
    },
    {
      skillName: "NodeJS",
      value: 50,
      pathColor: "#6a340e",
    },
    {
        skillName: "Mongo DB",
        value: 65,
        pathColor: "#65f3d3",
      },
      {
        skillName: "C Programming",
        value: 90,
        pathColor: "#08a084",
      },
      {
        skillName: "C++ Programming",
        value: 65,
        pathColor: "#eacf0e",
      },
      {
        skillName: "Java",
        value: 50,
        pathColor: "#f88f01",
      },
    {
      skillName: "Python",
      value: 55,
      pathColor: "#ff5739",
    },
  ];

  return (
        <div className="skill">
            <div>
                <br/>
                <h1 className="text-skill">Skills</h1>
            </div>
            <div className="main-container shadow-lg col-md-10 offset-md-1">
                <div className="padding">
                    <div
                        data-aos="fade-up"
                        className="row"
                        >
                        {skills.map((skill, index) => (
                        <div className="gx-3 col-md-6">
                            <div className=" skill-card">
                            <Skill
                                    key={index}
                                    skillName={skill.skillName}
                                    value={skill.value}
                                    pathColor={skill.pathColor}
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Skills;
