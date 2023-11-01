import React from "react";
import TextTransition, { presets } from "react-text-transition";

type Props = {
  children: string[];
};

const UseAnimatedText = ({ children }: Props) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((i) => {
          if (i === children.length - 1) {
            return 0;
          }

          return i + 1;
        }),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, [children]);

  return (
    <>
      <TextTransition springConfig={presets.wobbly}>
        {children[index]}
      </TextTransition>
    </>
  );
};

export default UseAnimatedText;
