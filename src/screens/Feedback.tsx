import React, { useLayoutEffect } from "react";

import Component from "../components/feedback";

const Feedback = () => {
  useLayoutEffect(() => {
    document.title = "Feedback | Tekorio";
  }, []);

  return <Component />;
};

export default Feedback;
