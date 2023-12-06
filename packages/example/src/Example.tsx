import { AnimatedSpan } from "my-library";
import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const inputSchema = z.object({
  duration: z.number().min(1),
  opacity: z.array(z.number().step(0.1).min(0).max(1)).optional(),
  x: z.array(z.number().step(0.1)).optional(),
  y: z.array(z.number().step(0.1)).optional(),
  scale: z.array(z.number().step(0.1).min(0).max(1)).optional(),
  rotate: z.array(z.number().step(0.1)).optional(),
  windowSize: z.number().min(0).max(100),
});

export default function Example({
  duration,
  opacity,
  x,
  y,
  scale,
  rotate,
  windowSize,
}: z.infer<typeof inputSchema>) {
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
        <AnimatedSpan
          duration={duration}
          animation={{ opacity, x, y, scale, rotate, windowSize }}
        >
          Hello world!
        </AnimatedSpan>
      </h1>
    </AbsoluteFill>
  );
}
