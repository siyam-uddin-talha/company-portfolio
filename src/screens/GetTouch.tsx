import React, { useLayoutEffect } from "react";

import ContactUs from "../components/contact-us/";

const GetTouch = () => {
  useLayoutEffect(() => {
    document.title = "Get touch | Tekorio";
  }, []);

  return (
    <>
      <ContactUs />
    </>
  );
};

export default GetTouch;
