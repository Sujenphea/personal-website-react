/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from "@emotion/react";

const Projects = () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4];

  return (
    <div className="category-container">
      {/* title */}
      <div className="title">Projects</div>
      {/* contents centered relative to container div */}
      <div
        id="projects-container"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          overflow: "scroll",
        }}
      >
        {testArray.map((d) => {
          return <ProjectCard />;
        })}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "400px",
        border: "1px solid #eee",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        flexShrink: 0,
      }}
    >
      sample
    </div>
  );
};

export default Projects;
