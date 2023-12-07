## remotion-animate-text

It is a [Remotion](https://remotion.dev/) package to animate the text. It animates the text either by `charecters` or by `words` on top of multiple `css` properties. It follows same pattern of `interpolate` function by native Remotion.

![Demo](https://github.com/pskd73/remotion-animate-text/blob/main/packages/library/ezgif-4-d59156ac58.gif)

### Usage

```tsx
import { AnimatedText } from "remotion-animate-text";
import { AbsoluteFill } from "remotion";

export const Example: React.FC = () => {
  const second = useCurrentSecond();

  const animation = {
    delimiter: "",
    opacity: [0, 1],
    x: [1, 0],
    y: [1, 0],
    scale: [0, 1],
    rotate: [45, 0],
    hideLoading: false,
    refRange: [0, 100], // can be any length and all other properties should also be of same length
  };

  return (
    <AbsoluteFill>
      <AnimatedText duration={60} animation={animation}>
        Hello world
      </AnimatedText>
    </AbsoluteFill>
  );
};
```

## License

See the [LICENSE.md](LICENSE.md) file for the license of this repo.  
To use Remotion, a company license is needed for some entities. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
