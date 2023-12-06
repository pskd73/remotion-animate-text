import { useCurrentFrame, useVideoConfig } from "remotion";

export const useCurrentSecond = () => {
  const currentFrame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return currentFrame / fps;
};
