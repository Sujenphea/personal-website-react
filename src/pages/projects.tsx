/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from "@emotion/react";

const Projects = () => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        css={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <div className="title">Projects</div>
      </div>
    </div>
  );
};

export default Projects;
