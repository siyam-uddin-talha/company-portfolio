import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Box, Container } from "@mui/material";
import { Col, Row, Collapse } from "antd";
const { Panel } = Collapse;
type Props = {
  data: {
    frequently: {
      question: string;
      answer: string;
    }[];
  };
};

const Feq = ({ data }: Props) => {
  return (
    <Box component="section" className="feq__sector __vartical">
      <Container>
        <Box className="flex ai-c jc-c" pt={"1.8em"} pb={"2.5em"}>
          <Box className="__branding">Frequently Asked Questions</Box>
        </Box>
      </Container>
      <Container>
        <Row justify="center">
          <Col lg={14} md={18} xs={23}>
            <Box>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined />
                }
                className="site-collapse-custom-collapse"
              >
                {data.frequently.map((e, i) => (
                  <Panel
                    header={
                      <Box
                        component="h6"
                        sx={{ fontSize: { xs: "1rem", sm: "1.15rem" } }}
                        fontWeight={"600"}
                        m={0}
                      >
                        {e.question}
                      </Box>
                    }
                    key={i + 1}
                  >
                    <Box>
                      <Box
                        component="h6"
                        sx={{ fontSize: { xs: "0.81rem", sm: "0.92rem" } }}
                        fontWeight={"500"}
                        m={0}
                      >
                        {e.answer}
                      </Box>
                    </Box>
                  </Panel>
                ))}
              </Collapse>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Feq;
