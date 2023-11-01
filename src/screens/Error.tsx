import React from "react";
import { Box, Container } from "@mui/material";

const Error = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Container className="h-100">
        <Box className="flex ai-c jc-c h-100">
          <Box sx={{ borderLeft: "3px solid #1890ff", pl: 3, py: 1 }}>
            <Box
              component="h1"
              fontSize="1.5rem"
              my={2}
              color="gray"
              fontWeight={"500"}
            >
              404
            </Box>
            <Box>
              <a href="/">
                <button className="__bt">Go home</button>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Error;
