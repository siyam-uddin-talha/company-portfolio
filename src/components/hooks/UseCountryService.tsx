import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Col, Row } from "antd";

type Types = {
  img: string;
  address: string;
};

const UseCountryService = () => {
  const countrys: Types[] = [
    {
      img: "/assets/icons/australia.png",
      address: "30 Commercial Road Fratton, Australia",
    },
    {
      img: "/assets/icons/finland.png",
      address: "Junkergatan 4, 126 53 Hagersten",
    },
    {
      img: "/assets/icons/india.png",
      address: "Prahladnagar, Ahmedabad-380015, Gujarat , India",
    },
    {
      img: "/assets/icons/japan.png",
      address: "71 Dawes Road, Brampton, On L6X 5N9, Toronto",
    },
  ];

  return (
    <main>
      <Container sx={{ py: 3 }}>
        <Row justify="center" gutter={[16, 16]}>
          {countrys.map((e, i) => (
            <Col key={i} lg={5} md={10} xs={23}>
              <Box p={2} className="flex jc-c ai-c fd-c">
                <Box width={"3rem"}>
                  <img src={e.img} className="__img" alt="" />
                </Box>

                <Box
                  component="h6"
                  className="gray"
                  fontSize="1rem"
                  fontWeight={"500"}
                  textAlign="center"
                  pt={1.5}
                >
                  {e.address}
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default UseCountryService;
