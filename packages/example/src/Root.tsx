import { Composition } from "remotion";
import Example from "./Example";

const Root = () => {
  return (
    <>
      <Composition
        id="Example"
        component={Example}
        durationInFrames={30 * 10}
        fps={30}
        height={1080}
        width={1920}
      />
    </>
  );
};

export default Root;
