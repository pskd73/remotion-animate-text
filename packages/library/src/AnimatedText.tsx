import { PropsWithChildren } from "react";
import { TextAnimation, applyTextAnimation } from "./animate-text";
import { useCurrentFrame } from "remotion";

export const AnimatedText = ({
  children,
  animation,
  duration,
}: PropsWithChildren<{
  duration: number;
  animation: TextAnimation;
}>) => {
  const frame = useCurrentFrame();

  return applyTextAnimation({
    frame,
    text: children as string,
    startFrame: 0,
    duration,
    animation,
  });
};
