import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";

const AboutArticle = () => {
  return (
    <section className="__vartical">
      <Container maxWidth="md">
        <Row>
          <Col span={24}>
            <Col lg={16} md={18} xs={24}>
              <Box component="h1" fontSize="2.7rem" fontWeight={"900"}>
                World class IT solutions with expertise.
              </Box>
            </Col>
            <Col span={24}>
              <Box pt={2}>
                <Box component="h2" fontSize="1rem" className="gray">
                  Tekorio have been using IT to improve productivity and lower
                  costs for businesses across the world for over 7 years. We
                  deliver solutions using our proven winning formula consisting
                  of expertise, innovation and understanding, which is embedded
                  in our company culture.
                </Box>
              </Box>
              <Box pt={2}>
                <Box component="h2" fontSize="1rem" className="gray">
                  We adapt our delivery to the way your work, whether as an
                  external provider.
                </Box>
              </Box>
              <Box pt={2}>
                <Box component="h2" fontSize="1rem" className="gray">
                  Every ITS client has a dedicated Virtual CIO who provides
                  personalized, strategic guidance. Your vCIO understands what
                  drives your business and recommends technology solutions to
                  solve your unique needs. With your best interests in mind,
                  your vCIO assists with budgeting.
                </Box>
              </Box>
              <Box pt={2}>
                <Box component="h2" fontSize="1rem" className="gray">
                  Services address a range of application and infrastructure
                  needs. We have a professional team who are extremely qualified
                  & smart.
                </Box>
              </Box>
              <Box pt={2}>
                <Box component="h2" fontSize="1rem" className="gray">
                  Complete an entire process from creating a design concept and
                  planning to launching a product. We offer our customers with
                  the truly beneficial solutions and is a professional service
                  provider
                </Box>
              </Box>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArticle;
