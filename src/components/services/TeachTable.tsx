import { Box, Container } from "@mui/material";
import { Col, Row } from "antd";
import { UseSimpleTitle } from "../hooks/UseTitle";

type Props = {
  data: {
    teachTable?: {
      tableName: string;
      description: string[];
    }[];
  };
};

const TeachTable = ({ data }: Props) => {
  return (
    <>
      <section className="__vartical">
        <Container sx={{ mb: "3em" }}>
          <Box>
            <UseSimpleTitle title="Insights" />
            <Box className="__branding2" lineHeight={"1"}>
              Our Technical Expertise
            </Box>
          </Box>
        </Container>
        <Container>
          {data.teachTable &&
            data.teachTable.map((e, i) => (
              <Box component="main" mt={2.5} key={i}>
                <Row gutter={[24, 24]}>
                  <Col
                    lg={6}
                    md={8}
                    sm={9}
                    xs={24}
                    className="flex ai-c __teach__col"
                  >
                    <Box
                      component="h1"
                      fontSize="1.3em"
                      fontWeight={"600"}
                      m={0}
                      color="white"
                      px={3}
                      py={2}
                    >
                      {e.tableName}
                    </Box>
                  </Col>
                  <Col
                    lg={18}
                    md={16}
                    sm={14}
                    xs={24}
                    className="flex ai-c teach__details__col"
                  >
                    <Box ml={2}>
                      <Box className="flex fw-w " gap={2}>
                        {e.description.map((text, index) => (
                          <Box
                            key={index}
                            component="h2"
                            fontSize="1.2em"
                            fontWeight={"400"}
                            m={0}
                            lineHeight={"1"}
                            pr={2}
                          >
                            {text}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Col>
                </Row>
              </Box>
            ))}
        </Container>
      </section>
    </>
  );
};

export default TeachTable;
