import React from "react";
import { useLocation } from "react-router";

type Props = {
  children: React.ReactNode;
};

const FixedScroll = ({ children }: Props) => {
  const history = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // window.history.scrollRestoration = "manual";
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // window.history.scrollRestoration = "manual";
  }, [history.pathname]);

  return <>{children} </>;
};

export default FixedScroll;
