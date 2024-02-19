import React from "react";
import Routers from "../routes/Routers";
import Header from "../components/Header/Header";

const Layout = () => {
  return(
    <>
    <Header />
    <main>
      <Routers />
    </main>
    </>
  )
};

export default Layout;
