import React, { Component } from "react";

//skill category
function Skill(props) {
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

//individual skill name
function SkillPoint(props) {
  return <div id="smaller">{props.point}</div>;
}

export default class Skills extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Skills</h2>
        </div>
        <div className="skills">
          <div id="skill-section">
            <Skill title="Languages" />
            <SkillPoint point="JavaScript/Typescript" />
            <SkillPoint point="PHP" />
            <SkillPoint point="Python" />
            <SkillPoint point="HTML5/CSS3/SCSS" />
          </div>
          <div id="skill-section">
            <Skill title="Frameworks" />
            <SkillPoint point="Node/Express" />
            <SkillPoint point="React/Redux-Saga/Hooks" />
            <SkillPoint point="Angular" />
            <SkillPoint point="Vue" />
            <SkillPoint point="Laravel/Codeigniter" />
            <SkillPoint point="Django/Flask" />
          </div>
          <div id="skill-section">
            <Skill title="DB and Cloud" />
            <SkillPoint point="MySQL" />
            <SkillPoint point="MongoDB" />
            <SkillPoint point="PostgreSQL" />
            <SkillPoint point="Google Cloud" />
            <SkillPoint point="AWS Lambda" />
            <SkillPoint point="AWS EC2/RDS/S3/DynamoDB" />
            <SkillPoint point="Azure" />
            <SkillPoint point="Heroku" />
            <SkillPoint point="Git + Github" />
            <SkillPoint point="CI/CD + PM2 + Nginx" />
          </div>
          <div id="skill-section">
            <Skill title="Design" />
            <SkillPoint point="Figma" />
            <SkillPoint point="Sketch" />
            <SkillPoint point="InVision" />
            <SkillPoint point="Adobe Illustrator" />
          </div>
        </div>
      </div>
    );
  }
}
