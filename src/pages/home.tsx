/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from "@emotion/react";

import { QuickStartCanvas } from "react-pts-canvas";
import { CanvasForm, CanvasSpace, Group, Create } from "pts";

const Home = () => {
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
      <QuickStartCanvas
        background="#333"
        name=""
        style={{ height: "100vh", width: "100vw" }}
        onAnimate={(space: CanvasSpace, form: CanvasForm, time: number) => {
          // get a line from pointer to center, and use it for direction and magnitude calculations
          let ln = space.pointer.$subtract(space.center.$add(0.1));
          let dir = ln.$unit();
          let mag = ln.magnitude();
          let mag2 = space.size.magnitude();

          // create a grid of lines
          let lines = Create.gridPts(space.innerBound, 20, 10).map((p) => {
            let dist = p.$subtract(space.center).magnitude() / mag2;
            return new Group(p, p.$add(dir.$multiply(dist * (20 + mag / 5))));
          });

          form.strokeOnly("#777").lines(lines);
        }}
      />
      <div
        css={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <div className="title">
          Hello, I'm <span className="highlight">Sujen Phea</span>.<br />
          I'm a full stack web developer.
          <br />
          I'm a iOS developer.
        </div>
      </div>
    </div>
  );
};

export default Home;
