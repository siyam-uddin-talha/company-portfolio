import React from "react";
import DisplayTeam from "../team/DisplayTeam";

import { Box, Container } from "@mui/material";
import { Col } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <Box component="main">
      <Container>
        <Box>
          <Col lg={12} md={16} xs={24}>
            <Box>
              <UseSimpleTitle title="Our Expert People" />
            </Box>

            <Box pr={2}>
              <Box
                component="h1"
                sx={{ fontSize: { xs: "2rem", sm: "2.4rem" } }}
                fontWeight={"900"}
              >
                Meet Our{" "}
                <span className="__bg__liniear">Professional {" ~ "} </span>{" "}
                Team Member
              </Box>
            </Box>
          </Col>
        </Box>
      </Container>
      <DisplayTeam slice={3} />
      <Container>
        <Box py={2}>
          <Box className="flex ai-c" justifyContent={"flex-end"}>
            <Link to="/team-members">
              <button className="__bt">See more</button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
