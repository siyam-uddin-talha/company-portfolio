import { Box, Container } from "@mui/material";
import UseRandomImage from "./UseRandomImage";
import { RiHome2Line } from "react-icons/ri";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  primary: string;
  secoundry?: {
    name: string;
    preLink: string;
  };
};

type UseBoxProps = {
  text: React.ReactNode;
};

const UseBanner = ({ title, primary, secoundry }: Props) => {
  const UseBox = ({ text }: UseBoxProps) => {
    return (
      <Box component="h3" fontSize="1.2rem" color="white" m={0}>
        {text}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      style={{
        background: `linear-gradient(to right, rgb(78, 84, 200), rgba(255, 54, 124, 0.42) 100%), url(${UseRandomImage()})`,
      }}
      py={12}
      mt={4}
    >
      <Container>
        <Box className="flex ai-c jc-c">
          <Box>
            <Box className="flex ai-c jc-c">
              <Box
                component="h2"
                fontWeight={"800"}
                color="white"
                fontSize="2rem"
                m={0}
              >
                {title}
              </Box>
            </Box>
            <Box className="flex ai-c" pt={1.5}>
              <Link to="/">
                <Box className="flex ai-c">
                  <RiHome2Line size={20} color="white" />
                  <Box pl={1}>
                    <UseBox text="Home" />
                  </Box>
                </Box>
              </Link>
              <Box className="flex ai-c" mx={1}>
                <BiChevronsRight size={20} color="white" />
              </Box>
              <Box>
                {secoundry ? (
                  <Link to={secoundry.preLink}>
                    <UseBox text={primary} />
                  </Link>
                ) : (
                  <UseBox text={primary} />
                )}
              </Box>
              {secoundry && (
                <Box className="flex ai-c">
                  <Box className="flex ai-c" mx={1}>
                    <BiChevronsRight size={20} color="white" />
                  </Box>
                  <UseBox text={secoundry.name} />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UseBanner;
