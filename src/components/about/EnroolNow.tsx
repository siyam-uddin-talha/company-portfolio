import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UseSimpleContent } from "../hooks/UseContent";

const EnroolNow = () => {
  return (
    <>
      <UseSimpleContent
        title="Enrool now"
        subtitle={{ main: "Choose your own", gradient: "growth path" }}
        description={
          "We offers a full-cycle software development services that meet varied business requirements from IT strategy consulting to the end-to-end development of scalable solutions."
        }
        img="/assets/about-us-3.svg"
        more={
          <Box>
            <Link to="/get-touch">
              <button className="__bt">Get in touch</button>
            </Link>
          </Box>
        }
      />
    </>
  );
};

export default EnroolNow;
