/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from "@emotion/react";

const Biography = () => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        className="title"
        css={{
          marginTop: "50px",
        }}
      >
        Biography
      </div>
      <div
        css={{
          position: "absolute",
          top: "50vh",
          backgroundColor: "transparent",
        }}
      >
        center
      </div>
    </div>
  );
};

export default Biography;
