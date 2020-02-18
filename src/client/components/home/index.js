import React, { lazy, Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect, useSelector } from "react-redux";
import { TRANSACTION } from "../../actions";

import { Container } from "./elements";

const NavBar = lazy(() => import("../navbar"));
const Hero = lazy(() => import("./hero"));
const History = lazy(() => import("./history"));

const App = ({ TRANSACTION }) => {
  const {
    transactions: {
      info: { data }
    }
  } = useSelector(state => state);

  useEffect(() => {
    TRANSACTION();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Enter title </title>

        <meta name="description" content="" />
        <meta name="author" content="Joel" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Helmet>
      <Container>
        <NavBar />
        <Hero transactions={data.data} />
        <History transactions={data.data.history} />
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = {
  TRANSACTION
};

export default connect(null, mapDispatchToProps)(App);
