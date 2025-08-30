import React from "react";
import InProgressPage from "./InProgress";
import Warning from "../components/Warning";

const Resources: React.FC = () => (
  <>
    <Warning>ATTENTION : cette section n'est pas encore rédigée.</Warning>
    <InProgressPage title="Resources" />;
  </>
);

export default Resources;
