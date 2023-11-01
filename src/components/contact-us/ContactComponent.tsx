import { Box, Container } from "@mui/material";
import { Col, Row, Collapse, Form, Input, Checkbox, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

type CountryType = {
  img: string;
  address: string;
  email: string;
  tel: string;
  name: string;
};
const countrys: CountryType[] = [
  {
    img: "/assets/contact/australia.jpg",
    address: "30 Commercial Road Fratton, Australia",
    email: "tekorio-australia@gmail.com",
    tel: "+8869806802",
    name: "australia",
  },
  {
    img: "/assets/contact/finland.jpg",
    address: "Junkergatan 4, 126 53 Hagersten",
    email: "tekorio-finland@gmail.com",
    tel: "+88966006802",
    name: "finland",
  },
  {
    img: "/assets/contact/india.jpg",
    address: "Prahladnagar, Ahmedabad-380015, Gujarat , India",
    email: "tekorio-india@gmail.com",
    tel: "+8898678006802",
    name: "india",
  },
  {
    img: "/assets/contact/japan.jpg",
    address: "71 Dawes Road, Brampton, On L6X 5N9, Toronto",
    email: "tekorio-japan@gmail.com",
    tel: "+88980064802",
    name: "japan",
  },
];

const Component = () => {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <Box className="__vartical" mt={"3em"}>
        <Container>
          <Box className="flex ai-c jc-c">
            <Col lg={12} md={16} xs={24} className="flex ai-c jc-c">
              <Box textAlign={"center"}>
                <Box className="__branding2">Get in Touch</Box>
                <Box
                  component="h5"
                  color="gray"
                  fontSize={"1.2em"}
                  m={0}
                  py={1}
                >
                  We’re open to discussing your ideas and look forward to
                  bringing them to life
                </Box>
              </Box>
            </Col>
          </Box>
        </Container>
      </Box>
      <Box
        className="__vartical __countact__us__sector"
        sx={{
          background: "url(/assets/bg-1.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row justify="center" className="gap-5" gutter={[24, 24]}>
            <Col lg={12} md={12} xs={24}>
              <Box>
                <Box>
                  <Form
                    name="contact-form"
                    style={{ width: "100%" }}
                    onFinish={handleSubmit}
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Your name" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email address!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Email adress" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Phone" />
                    </Form.Item>
                    <Form.Item
                      name="details"
                      rules={[
                        {
                          required: true,
                          message: "Please write your project details!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        size="large"
                        placeholder="Describe your project brifly"
                        autoSize={{ minRows: 3, maxRows: 6 }}
                      />
                    </Form.Item>

                    <Box mt={1}>
                      <Form.Item>
                        <Form.Item name="files">
                          <Upload.Dragger name="files" fileList={[]}>
                            <Box className="ant-upload-drag-icon">
                              <UploadOutlined />
                            </Box>
                            <Box className="ant-upload-text">
                              Click or drag file to upload
                            </Box>
                          </Upload.Dragger>
                        </Form.Item>
                      </Form.Item>
                    </Box>

                    <Box my={1.5}>
                      <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_, value) =>
                              value
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error(
                                      "You have to accept with aggrement"
                                    )
                                  ),
                          },
                        ]}
                      >
                        <Checkbox>
                          I give consent to the processing of my personal data
                          given in the contact form above under the terms and
                          conditions of Intellias Privacy Policy.
                        </Checkbox>
                      </Form.Item>
                    </Box>
                    <Box className="flex jc-fe">
                      <button className="__bt" type="submit">
                        Send
                      </button>
                    </Box>
                  </Form>
                </Box>
              </Box>
            </Col>
            <Col lg={10} md={10} xs={24}>
              <Collapse
                bordered={false}
                expandIconPosition="end"
                defaultActiveKey={["1"]}
              >
                {countrys.map((e, i) => (
                  <Panel
                    header={e.name}
                    key={i + 1}
                    className="__coutry__collapse pos-rel"
                  >
                    <Box
                      className="__img__display"
                      sx={{ background: `url(${e.img})` }}
                    />
                    <Box>
                      <Box
                        component="h6"
                        color="#000000"
                        fontSize="1rem"
                        fontWeight={"600"}
                      >
                        {e.address}
                      </Box>
                      <Box component="h6" fontSize="1rem" fontWeight={"500"}>
                        <a href={`mailto:${e.email}`}>{e.email}</a>
                      </Box>
                      <Box component="h6" fontSize="0.95rem" fontWeight={"500"}>
                        <a href={`tel:${e.tel}`}>{e.tel}</a>
                      </Box>
                    </Box>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default Component;
