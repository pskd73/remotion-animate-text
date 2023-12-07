import { AnimatedText } from "remotion-animate-text";
import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const inputSchema = z.object({
  word: z.boolean().default(false),
  duration: z.number().min(1),
  opacity: z.array(z.number().step(0.1).min(0).max(1)).optional(),
  x: z.array(z.number().step(0.1)).optional(),
  y: z.array(z.number().step(0.1)).optional(),
  scale: z.array(z.number().step(0.1).min(0).max(1)).optional(),
  rotate: z.array(z.number().step(0.1)).optional(),
  windowSize: z.number().min(0).max(100),
});

export default function Example({
  word,
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
      <h1 style={{ fontSize: 200, fontFamily: "sans-serif", color: "red" }}>
        <AnimatedText
          duration={duration}
          animation={{
            delimiter: word ? " " : "",
            opacity,
            x,
            y,
            scale,
            rotate,
            windowSize,
          }}
        >
          Hello world!
        </AnimatedText>
      </h1>
    </AbsoluteFill>
  );
}
