/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from "@emotion/react";

import { QuickStartCanvas } from "react-pts-canvas";
import { CanvasForm, CanvasSpace, Group, Create } from "pts";

const Home = () => {
  return (
    <div>
      <QuickStartCanvas
        background="#333"
        name=""
        css={{ backgroundColor: "#fff" }}
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
    </div>
  );
};

export default Home;
