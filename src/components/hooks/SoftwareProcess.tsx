import React from "react";
import { Box, Container } from "@mui/material";

const SoftwareProcess = () => {
  return (
    <section className="__vartical __software__requirment">
      <Container>
        <Box className="process__parents__">
          <Box p={"2em"} className="pos-rel">
            <Box className="flex ai-c jc-c fd-c pos-rel">
              <Box>
                <img src="/assets/requiement.svg" alt="" />
              </Box>
              <Box component="h3" m={0} fontSize="1.1rem" fontWeight={"600"}>
                Requirements
              </Box>
              <Box component="h6" m={0} fontSize="0.9rem" fontWeight={"400"}>
                Analyse, understand, clarify.
              </Box>
            </Box>
            <Box
              className="__proces__span"
              sx={{ "&:after": { content: "url(/assets/arrow.svg)" } }}
            />
          </Box>
          <Box p={"2em"} className="pos-rel">
            <Box className="flex ai-c jc-c fd-c pos-rel">
              <Box
                sx={{
                  "& > img": {
                    objectFit: "contain",
                    height: { xs: "280px", sm: "300px", md: "360px" },
                  },
                }}
              >
                <img src="/assets/development.svg" alt="" />
              </Box>
              <Box component="h3" m={0} fontSize="1.1rem" fontWeight={"600"}>
                Development
              </Box>
              <Box component="h6" m={0} fontSize="0.9rem" fontWeight={"400"}>
                Development or implementation of an IT solution.
              </Box>
            </Box>
            <Box
              className="__proces__span"
              sx={{ "&:after": { content: "url(/assets/arrow.svg)" } }}
            />
          </Box>
          <Box p={"2em"} className="pos-rel">
            <Box className="flex ai-c jc-c fd-c pos-rel">
              <Box
                sx={{
                  "& > img": {
                    objectFit: "contain",
                    height: { xs: "280px", sm: "300px", md: "360px" },
                  },
                }}
              >
                <img src="/assets/grow.svg" alt="" />
              </Box>
              <Box component="h3" m={0} fontSize="1.1rem" fontWeight={"600"}>
                Support
              </Box>
              <Box component="h6" m={0} fontSize="0.9rem" fontWeight={"400"}>
                Continually help and improve.
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SoftwareProcess;
