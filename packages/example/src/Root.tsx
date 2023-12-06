import { Composition } from "remotion";
import Example, { inputSchema } from "./Example";

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
        defaultProps={{
          duration: 60,
          opacity: [1, 1],
          x: [0, 0],
          y: [0, 0],
          scale: [1, 1],
          rotate: [0, 0],
          windowSize: 20
        }}
        schema={inputSchema}
      />
    </>
  );
};

export default Root;
