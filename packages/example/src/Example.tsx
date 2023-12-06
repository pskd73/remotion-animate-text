import { useCurrentSecond } from "my-library";
import { AbsoluteFill } from "remotion";

export default function Example() {
  const second = useCurrentSecond();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: 200, fontFamily: "sans-serif", color: "black" }}>
        Second {second.toFixed(2)}
      </h1>
    </AbsoluteFill>
  );
}
