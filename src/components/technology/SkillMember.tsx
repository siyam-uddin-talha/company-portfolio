import React from "react";
import { Col, Row } from "antd";
import { Container } from "@mui/material";
import {} from "./helper";
import { UseMemberCards } from "../hooks/UseCards";
import { IMember } from "../team/helper";
import { Box } from "@mui/system";
import { UseSimpleTitle } from "../hooks/UseTitle";
import { useNavigate } from "react-router";

type Props = {
  members: IMember[];
  catagory: string;
};

const SkillMember = ({ members, catagory }: Props) => {
  const navigate = useNavigate();

  const NavigateToContactUs = () => {
    navigate("/get-touch");
  };

  return (
    <section className="__vartical">
      <Box pb={"2.5em"}>
        <Container>
          <Box className="asdf">
            <UseSimpleTitle title="Hire us" />
            <Box m={0} className="__branding" textTransform={"capitalize"}>
              {`Hire ${catagory} developer`}
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Row gutter={[24, 24]}>
          {members.map((e, i) => (
            <Col lg={8} md={12} xs={23} key={i}>
              <UseMemberCards
                data={e}
                skill={true}
                onClick={NavigateToContactUs}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillMember;
