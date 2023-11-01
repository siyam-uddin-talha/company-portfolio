import React from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import { Avatar, Col, Rate, Row } from "antd";
import { CaseContent } from "../home/helper";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { IMember } from "../team/helper";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ReviewTypes } from "../feedback/helper";

type Props = {
  data: Content[];
};

type Content = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

export const UseSimpleCards = ({ data }: Props) => {
  return (
    <Row className="jc-c">
      <Box className="flex fw-w jc-c" mt={13} sx={{ gap: { xs: 10, sm: 8 } }}>
        {data.map((e, i) => (
          <Col
            key={`${e.title} ${i}`}
            className="__card__single"
            lg={5}
            md={11}
            xs={20}
          >
            <Box px={2} pb={5} pt={6} className="pos-rel flex ai-c jc-c fd-c">
              <Box className="__icon__branding">
                <Box component="h2" className="flex ai-c jc-c" m={0}>
                  {e.icon}
                </Box>
              </Box>
              <Box p={2}>
                <Box
                  textAlign="center"
                  component="h4"
                  m={0}
                  fontSize="1.15rem"
                  fontWeight={"700"}
                >
                  {e.title}
                </Box>
              </Box>
              <Box>
                <Box
                  component="p"
                  fontWeight={"500"}
                  m={0}
                  textAlign="center"
                  className="gray"
                >
                  {e.subTitle}
                </Box>
              </Box>
            </Box>
          </Col>
        ))}
      </Box>
    </Row>
  );
};

export const UseSingleCard = ({ img, title, subTitle, route }: CaseContent) => {
  const router = useNavigate();

  const link = `${route}${title.split(" ").join("-").toLowerCase()}`;

  return (
    <>
      <Box className="case__single" m={2}>
        <Card>
          <CardActionArea onClick={() => router(link)}>
            <Box className="pos-rel __card__parents">
              <CardMedia
                component="img"
                height="300"
                image={img}
                alt={"card "}
              />
              <Box className="plus__box flex ai-c jc-c">
                <Box
                  p={1}
                  className="bg-white ai-c jc-c flex"
                  sx={{ opacity: "1" }}
                >
                  <AiOutlinePlus size={30} />
                </Box>
              </Box>
            </Box>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <Link className="__auh" to={link}>
                {title}
              </Link>
            </Typography>
            <Typography component="h6" fontSize={"0.9rem"} color="gray">
              {subTitle}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export const UseReviewCard = ({
  description,
  name,
  profession,
  star,
  img,
}: ReviewTypes) => {
  return (
    <Box className="__review__card__parents" px={3.5} py={3} m={1.5}>
      <Box className="flex jc-sb">
        <Box>
          <Box className="flex __review__img__box" gap={2}>
            {img ? (
              <img src={img} className="__img" alt="" />
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
          {description}
        </Box>
      </Box>
    </Box>
  );
};

type MemberProps = {
  data: IMember;
  skill?: boolean;
  onClick?: () => void;
};

export const UseMemberCards = ({ data, skill, onClick }: MemberProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    return;
  };

  return (
    <Box className="pos-rel __member__card__single" mx={3}>
      <Box className="__member__overly" />
      <Box className="__overly__left">
        <span />
      </Box>
      <Box className="_overflow" onClick={() => handleClick()}>
        <img src={data.img} className="__img" alt="" />
      </Box>
      <Box className="__member__links" px={2} py={3}>
        <Box className="flex fd-c" gap={1}>
          <Box>
            <a href={data.social.facebook}>
              <FaFacebookF />
            </a>
          </Box>
          <Box>
            <a href={data.social.twitter}>
              <FaTwitter />
            </a>
          </Box>
          <Box>
            <a href={data.social.instagram}>
              <FaInstagram />
            </a>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          component="h2"
          pt={1}
          m={0}
          fontWeight={"700"}
          onClick={() => handleClick()}
        >
          {data.name}
        </Box>
        {skill && (
          <Box>
            <Box className="flex ai-c" gap={"1em"}>
              {data.skill.map((e, index) => (
                <Box
                  key={index}
                  px={1}
                  py={0.5}
                  sx={{ border: "1px solid #1890ff" }}
                >
                  <Box component="h5" m={0} fontWeight={"400"}>
                    {e}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
        <Box component="h5" pt={0.5} m={0} fontSize="1rem" fontWeight={"500"}>
          {data.profession}
        </Box>
      </Box>
    </Box>
  );
};
