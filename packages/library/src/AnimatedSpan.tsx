import { ComponentProps } from "react";
import { TextAnimation, applyTextAnimation } from "./animate-text";
import { useCurrentFrame } from "remotion";

export const AnimatedSpan = ({
  children,
  animation,
  duration,
}: ComponentProps<"span"> & {
  duration: number;
  animation: TextAnimation;
}) => {
  const frame = useCurrentFrame();

  return applyTextAnimation({
    frame,
    text: children as string,
    startFrame: 0,
    duration,
    animation,
  });
};
