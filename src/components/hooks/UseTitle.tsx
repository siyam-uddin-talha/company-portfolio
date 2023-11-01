import { Box } from "@mui/system";
import { Col, Row } from "antd";

type Props = {
  title: string;
  right?: boolean;
  black?: boolean;
};

export const UseSimpleTitle = ({ title, right, black }: Props) => {
  return (
    <Box py={2} className="flex">
      <Box className="flex ai-c" gap={2}>
        {right && (
          <Box
            className="rag"
            width={"4rem"}
            pt={0.3}
            sx={{ background: "#1890ff" }}
            borderRadius={2}
          />
        )}
        <Box
          component="h2"
          color={black ? "black" : "#1890ff"}
          fontWeight="700"
          m={0}
        >
          {title}
        </Box>
        {!right && (
          <Box
            className="rag"
            width={"4rem"}
            pt={0.3}
            sx={{ background: "#1890ff" }}
            borderRadius={2}
          />
        )}
      </Box>
    </Box>
  );
};

export const UseMiddleTitle = ({ title }: Props) => {
  return (
    <Box py={2.5}>
      <Box className="flex ai-c jc-c" gap={2}>
        <Box
          className="rag"
          width={"4rem"}
          pt={0.3}
          sx={{ background: "#1890ff" }}
          borderRadius={2}
        />
        <Box component="h2" color={"#1890ff"} fontWeight="700" m={0}>
          {title}
        </Box>
        <Box
          className="rag"
          width={"4rem"}
          pt={0.3}
          sx={{ background: "#1890ff" }}
          borderRadius={2}
        />
      </Box>
    </Box>
  );
};

type HeaderProps = {
  title: string;
  subTitle: string;
};

export const UseHeaderTitle = ({ title, subTitle }: HeaderProps) => {
  return (
    <Box pb={"2em"}>
      <Row justify="center">
        <Col lg={14} md={16} xs={24} className="flex fd-c ai-c jc-c">
          <Box
            component="h1"
            sx={{ fontSize: { xs: "2em", sm: "2.2em" } }}
            fontWeight={"700"}
            m={0}
            textAlign="center"
          >
            {title}
          </Box>
          <Box
            component="h5"
            sx={{ fontSize: { xs: "0.9em", sm: "1.1em" } }}
            fontWeight={"500"}
            m={0}
            mt={1.5}
            textAlign="center"
          >
            {subTitle}
          </Box>
        </Col>
      </Row>
    </Box>
  );
};
