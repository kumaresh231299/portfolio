import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiGit, SiGithub, SiHtml5, SiCss3, SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: <SiReact />, name: "ReactJS", color: "#61DAFB", bg: "#e8f8ff" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933", bg: "#f0fff0" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", bg: "#f0fff4" },
  { icon: <SiExpress />, name: "Express.js", color: "#000000", bg: "#f5f5f5" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E", bg: "#fffde7" },
  { icon: <SiGit />, name: "Git", color: "#F05032", bg: "#fff3f0" },
  { icon: <SiGithub />, name: "GitHub", color: "#181717", bg: "#f5f5f5" },
  { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26", bg: "#fff4f0" },
  { icon: <SiCss3 />, name: "CSS3", color: "#1572B6", bg: "#f0f6ff" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">What I Work With</span>
          <h2 className="section-heading">Skills</h2>
        </div>


        <div className="row g-3 justify-content-center">
          {skills.map((skill, i) => (
            <div key={i} className="col-4 col-sm-3 col-md-2-4 col-lg-auto">
              <div className="skill-card" style={{ "--skill-color": skill.color, "--skill-bg": skill.bg }}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills