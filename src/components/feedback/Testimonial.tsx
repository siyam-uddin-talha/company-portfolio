import React, { useState } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Avatar, Col, Rate, Row } from "antd";

import { FeedbackReview, ReviewTypes } from "./helper";
import { UseHeaderTitle } from "../hooks/UseTitle";

const Testimonial = () => {
  return (
    <section className="__vartical">
      <Container>
        <Box>
          <UseHeaderTitle title={"Client Approch"} subTitle={"Feedback"} />
        </Box>
        <Row gutter={[24, 24]} justify="center">
          {FeedbackReview.map((e, index) => (
            <Col key={index} lg={8} md={12} xs={24}>
              <Render {...e} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Render = ({ img, name, profession, star, description }: ReviewTypes) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Box className="__review__main pos-rel">
          <Box className="flex jc-sb">
            <Box>
              <Box className="flex" gap={2}>
                {img ? (
                  <Avatar src={img} size="large" />
                ) : (
                  <Avatar size="large">{"U"}</Avatar>
                )}
              </Box>
              <Box>
                <Box component="h2" pt={1} m={0} fontWeight={"700"}>
                  {name}
                </Box>
                <Box component="h4" m={0} className="c-main" fontWeight={"600"}>
                  {profession}
                </Box>
              </Box>
            </Box>
            <Box>
              <Rate disabled defaultValue={star} />
            </Box>
          </Box>
          <Box p={1}>
            <Box component="h4" className="gray" fontWeight={"700"}>
              {description.substr(0, 80)}
              <Box
                component="span"
                color="#1890ff"
                ml={1}
                sx={{ cursor: "pointer" }}
                onClick={() => setSeeMore(!seeMore)}
              >
                {"...more"}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog open={seeMore} onClose={() => setSeeMore(!seeMore)}>
        <DialogContent>
          <DialogContentText>
            <Box
              component="span"
              className="gray"
              fontWeight={"700"}
              pb={"1em"}
            >
              {description}
            </Box>
            <Box component="span" className="flex fd-c" mt={1}>
              <Box component="span" pt={1} m={0} fontWeight={"700"}>
                {name}
              </Box>
              <Box component="span" m={0} className="c-main" fontWeight={"600"}>
                {profession}
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Testimonial;
