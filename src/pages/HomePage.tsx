import React from "react";
import Navbar from "../components/Navbar";
import SplitLayout from "../components/SplitLayout";
import ActiveUsers from "../components/ActiveUsers";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SplitLayout>
        <ActiveUsers />
      </SplitLayout>
    </>
  );
};

export default HomePage;
