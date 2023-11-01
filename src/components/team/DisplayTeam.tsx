import React from "react";
import { Col, Row } from "antd";
import { Container } from "@mui/material";
import { TeamMembers } from "./helper";
import { UseMemberCards } from "../hooks/UseCards";

type Props = {
  slice?: number;
  skill?: boolean;
};

const DisplayTeam = ({ slice, skill }: Props) => {
  return (
    <section className="__vartical">
      <Container>
        <Row gutter={[24, 24]}>
          {TeamMembers.map((e, i) => (
            <Col lg={8} md={12} xs={23} key={i}>
              <UseMemberCards data={e} skill={skill} />
            </Col>
          )).slice(0, slice ? slice : TeamMembers.length)}
        </Row>
      </Container>
    </section>
  );
};

export default DisplayTeam;
