import { CSSProperties } from "react";
import { interpolate } from "remotion";

export type TextAnimation = {
  delimiter?: string;
  opacity?: number[];
  y?: number[];
  x?: number[];
  scale?: number[];
  rotate?: number[];
  hideLoading?: boolean;
  windowSize?: number;
  showOverflow?: boolean;
  refRange?: number[];
  durations?: number[];
};

type Part = {
  text: string;
  pct: number;
};

export const interpolateText = ({
  text,
  frame,
  range,
  delimiter,
  windowPct,
  durations,
}: {
  text: string;
  frame: number;
  range: [number, number];
  windowPct: number;
  delimiter: string;
  durations: number[];
}) => {
  const [start, end] = range;
  const duration = end - start;
  const split = text.split(delimiter);
  const parts: Array<Part> = [];

  const blur = (windowPct / 100) * duration || 1;
  const iDuration = (duration - blur) / split.length;
  const netStart = frame - start;

  let totalDuration = 0;
  for (let i = 0; i < split.length; i++) {
    let fPct = interpolate(
      netStart,
      [i * iDuration, i * iDuration + iDuration + blur],
      [0, 100],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
    );
    if (durations[i] !== undefined) {
      fPct = interpolate(
        netStart,
        [totalDuration, totalDuration + durations[i]],
        [0, 100],
        { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
      );
      totalDuration += durations[i];
    }

    parts.push({
      text: split[i],
      pct: fPct,
    });
  }

  return { parts, range };
};

export const animateText = ({
  interpolated,
  joinBy,
  toStyle,
}: {
  frame: number;
  interpolated: ReturnType<typeof interpolateText>;
  joinBy: string;
  toStyle: (args: { pct: number }) => CSSProperties;
}) => {
  const { parts } = interpolated;

  const brk = joinBy === " " ? "" : " ";
  const nowrap = brk === " ";
  const elements = [];
  let tmpParts = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.text !== brk) {
      tmpParts.push(
        <span
          key={i}
          style={{
            ...toStyle({ pct: part.pct }),
            whiteSpace: "pre",
          }}
        >
          {part.text}
        </span>
      );
    }
    if (part.text === brk || brk === "" || i === parts.length - 1) {
      elements.push(
        <span
          key={`grp-${i}`}
          style={{ whiteSpace: nowrap ? "nowrap" : undefined }}
        >
          {tmpParts}
        </span>
      );
      if (i !== parts.length - 1) {
        elements.push(<span key={`space-${i}`}>&nbsp;</span>);
      }
      tmpParts = [];
    }
  }

  return <>{elements}</>;
};

export const applyTextAnimation = ({
  frame,
  text,
  animation,
  startFrame,
  duration,
}: {
  frame: number;
  text: string;
  animation?: TextAnimation;
  startFrame: number;
  duration: number;
}) => {
  const interpolated = interpolateText({
    text,
    frame,
    range: [startFrame, startFrame + duration],
    delimiter: animation?.delimiter || "",
    windowPct: animation?.windowSize || 50,
    durations: animation?.durations || [],
  });
  return animateText({
    frame,
    interpolated,
    joinBy: animation?.delimiter || "",
    toStyle: ({ pct }) => {
      const transforms: string[] = [];
      const refRange = animation?.refRange || [0, 100];
      if (animation?.scale) {
        const scale = interpolate(pct, refRange, animation.scale, {
          extrapolateRight: "clamp",
        });
        transforms.push(`scale(${scale})`);
      }
      if (animation?.y) {
        const y = interpolate(pct, refRange, animation.y, {
          extrapolateRight: "clamp",
        });
        transforms.push(`translateY(${y}em)`);
      }
      if (animation?.x) {
        const y = interpolate(pct, refRange, animation.x, {
          extrapolateRight: "clamp",
        });
        transforms.push(`translateX(${y}em)`);
      }
      if (animation?.rotate) {
        const rotate = interpolate(pct, refRange, animation.rotate, {
          extrapolateRight: "clamp",
        });
        transforms.push(`rotate(${rotate}deg)`);
      }
      return {
        opacity:
          animation?.opacity &&
          interpolate(pct, refRange, animation.opacity, {
            extrapolateRight: "clamp",
          }),
        transform: transforms.length > 0 ? transforms.join(" ") : undefined,
        display: animation?.hideLoading && pct === 0 ? "none" : "inline-block",
      };
    },
  });
};
