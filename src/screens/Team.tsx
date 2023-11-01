import React, { useLayoutEffect } from "react";
import AllTeam from "../components/team/AllTeam";

const Team = () => {
  useLayoutEffect(() => {
    document.title = "Our Team | Tekorio";
  }, []);
  return <AllTeam />;
};

export default Team;
