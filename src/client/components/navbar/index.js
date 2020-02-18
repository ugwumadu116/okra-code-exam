import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, BurgerButton, NavWrapper, MobileNav } from "./elements";
import Logo from "../../assets/Logo.png";
import { GoDashboard, GoSignOut } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { FaExchangeAlt, FaShare, FaReply } from "react-icons/fa";

const App = () => {
  const [expand, setExpand] = useState(false);

  const onToggle = () => setExpand(expand => !expand);

  return (
    <NavWrapper>
      <Container>
        <BurgerButton
          className="bugger-menu"
          onClick={onToggle}
          expand={expand}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </BurgerButton>

        <Link exact onClick={onToggle} to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div className={(expand && "box") || "box2"}>
          <MobileNav>
            <div className="containerLogo">
              <div className="image-wrapper">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="profile"
                />
              </div>
              <div className="content-wrapper">
                <h1>Habib Korede</h1>
                <p>Product Designer</p>
              </div>
              <BurgerButton
                className="bugger-menu"
                onClick={onToggle}
                expand={expand}
              >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </BurgerButton>
            </div>

            <div className="linkContainer">
              <div className="row">
                <GoDashboard color="#717D7C" />

                <NavLink to="/">Dashbaord</NavLink>
              </div>

              <div className="row">
                <FaExchangeAlt color="#717D7C" />
                <NavLink to="/">Transfers</NavLink>
              </div>

              <div className="row">
                <FaShare color="#717D7C" />
                <NavLink to="/">Credit</NavLink>
              </div>
              <div className="row">
                <FaReply color="#717D7C" />
                <NavLink to="/">Debit</NavLink>
              </div>
              <div className="footer">
                <div className="row">
                  <IoIosSettings color="#717D7C" />
                  <NavLink to="/">Settings</NavLink>
                </div>

                <div className="row">
                  <GoSignOut color="#717D7C" />
                  <NavLink to="/">Signout</NavLink>
                </div>
              </div>
            </div>
          </MobileNav>
        </div>
      </Container>
    </NavWrapper>
  );
};

export default App;
