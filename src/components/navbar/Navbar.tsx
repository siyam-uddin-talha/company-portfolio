import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { motion, useCycle } from "framer-motion";

import { Link } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import {
  RiArrowDropDownLine,
  RiFlutterFill,
  RiReactjsLine,
  RiVuejsLine,
} from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import {
  TbBrandPython,
  TbCloudComputing,
  TbDeviceGamepad2,
} from "react-icons/tb";
import { HiOutlineCollection, HiOutlineDeviceMobile } from "react-icons/hi";
import { AiOutlineApartment } from "react-icons/ai";
import { DiRubyRough } from "react-icons/di";

import {
  SiBlockchaindotcom,
  SiAltiumdesigner,
  SiReact,
  SiAngularjs,
  SiDiaspora,
  SiLaravel,
} from "react-icons/si";
import {
  NavbarRouteType,
  RoutingContent,
  MenuContent,
  MultipleRoute,
} from "./helper";
import { ClickAwayListener, Slide, useScrollTrigger } from "@mui/material";
import { FaJava, FaNodeJs } from "react-icons/fa";
import {
  MdOutlineHealthAndSafety,
  MdOutlineTravelExplore,
  MdRealEstateAgent,
} from "react-icons/md";
import { LinkParser } from "../utils/Parser";
import { BsKanban } from "react-icons/bs";

const whatWeDoMenuContant: RoutingContent[] = [
  {
    title: "Web development",
    subTitle: "MERN, Full-stack, PHP",
    route: "/services/web-development",
    icon: <CgWebsite />,
  },
  {
    title: "Game development",
    subTitle: "Unity 2D/3D",
    route: "/services/game-development",
    icon: <TbDeviceGamepad2 />,
  },
  {
    title: "Mobile apps",
    subTitle: "Android, IOS",
    route: "/services/mobile-development",
    icon: <HiOutlineDeviceMobile />,
  },
  {
    title: "Blockchain",
    subTitle: "Ethereum, corda, solidity",
    route: "/services/blockchain",
    icon: <SiBlockchaindotcom />,
  },
  {
    title: "Artificial Intelligence",
    subTitle: "Ai, voice based solution, data structure, algorithom",
    route: "/services/artificial-intelligence",
    icon: <AiOutlineApartment />,
  },
  {
    title: "UX/UI design",
    subTitle: "React, Anguller, vue",
    route: "/services/ux-ui-design",
    icon: <SiAltiumdesigner />,
  },
  {
    title: "Cloud computing",
    subTitle: "IaaS, Pass, Sass ",
    route: "/services/cloud-computing",
    icon: <TbCloudComputing />,
  },
];

const technologyContant: MultipleRoute[] = [
  {
    catagory: "Front-end",
    routes: [
      {
        title: "React.js",
        icon: <SiReact />,
        route: "/technology/react-developer",
      },
      {
        title: "Angular.js",
        icon: <SiAngularjs />,
        route: "/technology/angular-developer",
      },
      {
        title: "Vue.js",
        icon: <RiVuejsLine />,
        route: "/technology/angular-developer",
      },
    ],
  },
  {
    catagory: "Backend",
    routes: [
      {
        title: "Python",
        icon: <TbBrandPython />,
        route: "/technology/python-developer",
      },
      {
        title: ".NET",
        icon: <SiDiaspora />,
        route: "/technology/dot-net-developer",
      },
      {
        title: "Ruby On Rails",
        icon: <DiRubyRough />,
        route: "/technology/ruby-developer",
      },
      {
        title: "Node.js",
        icon: <FaNodeJs />,
        route: "/technology/nodejs-developer",
      },
      {
        title: "Laravel",
        icon: <SiLaravel />,
        route: "/technology/laravel-developer",
      },
    ],
  },
  {
    catagory: "Mobile",
    routes: [
      {
        title: "React Native",
        route: "/technology/react-native-developer",
        icon: <RiReactjsLine />,
      },
      {
        title: "Flutter",
        route: "/technology/flutter-developer",
        icon: <RiFlutterFill />,
      },
      {
        title: "Java",
        route: "/technology/java-developer",
        icon: <FaJava />,
      },
    ],
  },
];

const industryContant: RoutingContent[] = [
  {
    title: "Health care",
    icon: <MdOutlineHealthAndSafety />,
    route: `/work/${LinkParser("Medical SoftwareDevelopment Services")}`,
    subTitle: "Create fully compliance and secure healthcare solutions.",
  },
  {
    title: "Travel solution",
    icon: <MdOutlineTravelExplore />,
    route: `/work/${LinkParser("Travel Software Development Services")}`,
    subTitle: "Build your software for your travel company",
  },
  {
    title: "E-Commerce solution",
    icon: <HiOutlineCollection />,
    route: `/work/${LinkParser("E-commerce Development Services")}`,
    subTitle: "Create your own E-commerce platform for bussiness",
  },
  {
    title: "Real Estate",
    icon: <MdRealEstateAgent />,
    route: `/work/${LinkParser("Building Real Estate Development Software")}`,
    subTitle: "Use technology to build solutions for RealEstate.",
  },
  {
    title: "Finance ",
    icon: <BsKanban />,
    route: `/work/${LinkParser("Finance Development Services")}`,
    subTitle: "Financ, Banking, Payment",
  },
];

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
type ListProps = {
  setClose: Function;
};

type DropdownProps = {
  setClose: Function;
  data: RoutingContent[];
};

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function HideOnScroll2(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return <>{!trigger && children}</>;
}

export default function AppHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [serviceOpen, setServiceOpen] = useState<boolean>(false);
  const [industryOpen, setIndustryOpen] = useState<boolean>(false);
  const [technologyOpen, setTechnologyOpen] = useState<boolean>(false);

  const routes: NavbarRouteType[] = [
    {
      title: "About us",
      route: "/about-us",
    },
    {
      title: "Case studies",
      route: "/case-studies",
    },
    {
      title: "What we do",
      icon: (
        <Box ml={0.4}>
          <RiArrowDropDownLine />
        </Box>
      ),
      onClick: () => setServiceOpen(!serviceOpen),
    },
    {
      title: "Industry",
      icon: (
        <Box ml={0.4}>
          <RiArrowDropDownLine />
        </Box>
      ),
      onClick: () => setIndustryOpen(!industryOpen),
    },
    {
      title: "Technology",
      icon: (
        <Box ml={0.5}>
          <RiArrowDropDownLine />
        </Box>
      ),
      onClick: () => setTechnologyOpen(!technologyOpen),
    },
    {
      title: "Blogs",
      route: "/blogs",
    },
    {
      title: "Feeback",
      route: "/feedback",
    },
  ];

  const HandleRoutesClick = (e: NavbarRouteType) => {
    if (!e.onClick) return;
    e.onClick();
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll>
          <AppBar
            color="default"
            sx={{ borderBottom: "2px solid #f3f3f3" }}
            style={{ boxShadow: "none", background: "white" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                className="logo__branding"
                sx={{ mr: "1rem" }}
              >
                <Link to="/" className="nav_home_link">
                  <img src="/icon.png" alt="logo" />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {routes.map((e) => (
                  <Box key={e.title} onClick={() => HandleRoutesClick(e)}>
                    <Box mr={1.5}>
                      {e.route ? (
                        <Link to={e.route} className="c-b __auh">
                          <Box
                            className="flex ai-c"
                            component="h6"
                            fontSize="0.7rem"
                            fontWeight={"500"}
                            m={0}
                            textTransform="uppercase"
                          >
                            {e.title}
                            {e.icon && e.icon}
                          </Box>
                        </Link>
                      ) : (
                        <Box
                          component="h6"
                          fontSize="0.7rem"
                          fontWeight={"500"}
                          m={0}
                          className="flex ai-c c-b __auh"
                          textTransform="uppercase"
                        >
                          {e.title}
                          {e.icon && e.icon}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <Box className="flex ai-c">
                <Box ml={2} sx={{ display: { xs: "flex", md: "none" } }}>
                  <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                  >
                    <MenuToggleButton toggle={() => toggleOpen()} />
                  </motion.div>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
      {/*-------------------- dropdown ---------------------- */}
      <HideOnScroll2>
        <React.Fragment>
          {serviceOpen && (
            <ServiceDropdown
              setClose={() => setServiceOpen(false)}
              data={whatWeDoMenuContant}
            />
          )}
        </React.Fragment>
      </HideOnScroll2>
      <HideOnScroll2>
        <React.Fragment>
          {industryOpen && (
            <ServiceDropdown
              setClose={() => setIndustryOpen(false)}
              data={industryContant}
            />
          )}
        </React.Fragment>
      </HideOnScroll2>

      <HideOnScroll2>
        <React.Fragment>
          {isOpen && <MobileMenu setClose={() => toggleOpen()} />}
        </React.Fragment>
      </HideOnScroll2>

      <HideOnScroll2>
        <React.Fragment>
          {technologyOpen && (
            <TechnologyDropdown setClose={() => setTechnologyOpen(false)} />
          )}
        </React.Fragment>
      </HideOnScroll2>
    </React.Fragment>
  );
}

// ----------------------------- Dropdown ----------------------
const ServiceDropdown = ({ setClose, data }: DropdownProps) => {
  return (
    <>
      <ClickAwayListener onClickAway={() => setClose()}>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className="__service__dropdown"
          p={2}
          px={3}
          zIndex={100}
          position="fixed"
        >
          <Box>
            <Box component={"ul"}>
              {data.map((e) => (
                <Box component={"li"} key={e.title}>
                  <Link to={e.route} onClick={() => setClose()}>
                    <Box className={"flex ai-c"}>
                      {/* ------------ icon -------------- */}
                      <Typography variant="h6">{e.icon}</Typography>

                      {/* ------------ title & subtitle -------------- */}
                      <Box ml={1.5} sx={{ overflow: "hidden" }}>
                        <motion.h3
                          style={{ margin: 0 }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            damping: 40,
                            duration: 0.3,
                          }}
                        >
                          {e.title}
                        </motion.h3>
                        <motion.h4
                          style={{ display: "inline-block", margin: 0 }}
                          initial={{ y: "150%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.7 }}
                          className="__auh"
                        >
                          {e.subTitle}
                        </motion.h4>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </>
  );
};

const TechnologyDropdown = ({ setClose }: ListProps) => {
  return (
    <>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        className="__technology__dropdown ai-c jc-c w-100"
        zIndex={100}
        position="fixed"
      >
        <ClickAwayListener onClickAway={() => setClose()}>
          <Box className="__technology__wrapper">
            {technologyContant.map((item, index) => (
              <Box
                key={index}
                sx={{
                  borderRight: "1px solid #dbdbdb",
                  px: "2.5rem",
                  "&:last-child": { border: "none" },
                }}
              >
                <Box mb={"1em"}>
                  <Box component="h6" fontSize="1rem" fontWeight={"500"} m={0}>
                    {item.catagory}
                  </Box>
                </Box>
                <Box component={"ul"} className="flex fd-c" gap={"1em"}>
                  {item.routes.map((e) => (
                    <Box component={"li"} key={e.title}>
                      <Link
                        to={e.route ? e.route : "#"}
                        onClick={() => setClose()}
                      >
                        <Box className={"flex ai-c"}>
                          {/* ------------ icon -------------- */}
                          <Box className={"flex ai-c"} m={0} component="h2">
                            {e.icon}
                          </Box>

                          {/* ------------ title  -------------- */}
                          <Box ml={1.5} sx={{ overflow: "hidden" }}>
                            <motion.h4
                              style={{ display: "inline-block", margin: 0 }}
                              initial={{ y: "150%" }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.7 }}
                              className="__auh"
                            >
                              {e.title}
                            </motion.h4>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </ClickAwayListener>
      </Box>
    </>
  );
};

// --------------------------- Movile Screen Menu  ----------------------
const MobileMenu = ({ setClose }: ListProps) => {
  const otherRoutes: MenuContent[] = [
    {
      title: "Feedback",
      route: "/feedback",
    },
  ];

  const whatWeDo = whatWeDoMenuContant.map((e) => {
    return getItem(<Link to={e.route}>{e.title} </Link>, e.title, e.icon);
  });
  const technologyMenu = technologyContant.map((e) => {
    return getItem(
      e.catagory,
      e.catagory,
      null,
      e.routes.map((route) => {
        return getItem(
          <Link to={route.route ? route.route : "#"}>{route.title} </Link>,
          route.title,
          route.icon
        );
      })
    );
  });
  const industryMenu = industryContant.map((e) => {
    return getItem(<Link to={e.route}>{e.title} </Link>, e.title, e.icon);
  });
  const otherRoutes__dropdown = otherRoutes.map((e) => {
    return getItem(<Link to={e.route}>{e.title} </Link>, e.title);
  });

  const routes: MenuItem[] = [
    getItem(<Link to="/about-us">About us</Link>, "about us"),
    getItem(<Link to="/case-studies">Case studies</Link>, "Case studies"),
    getItem("What we do", "What we do", null, whatWeDo),
    getItem("Industry", "Industry", null, industryMenu),
    getItem("Technology", "technology", null, technologyMenu),
    getItem(<Link to="/blogs">Blogs</Link>, "Blogs"),
  ];

  return (
    <>
      <Box
        sx={{ display: { xs: "block", md: "none" }, top: "63px" }}
        className="__dropdown__"
        position={"fixed"}
      >
        <Menu
          mode="inline"
          items={[...routes, ...otherRoutes__dropdown]}
          onClick={() => setClose()}
        />
      </Box>
    </>
  );
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode | null,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// ----------------------------- animated button ----------------------
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggleButton = ({ toggle }: { toggle: Function }) => (
  <button className="toggle__button flex ai-c" onClick={() => toggle()}>
    <svg width="25" height="25" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
