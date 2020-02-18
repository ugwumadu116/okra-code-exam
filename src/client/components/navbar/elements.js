import styled from "styled-components";

export const NavWrapper = styled.div`
  background: #ffffff;
  .bugger-menu {
    display: none;
  }
`;

export const Container = styled.nav`
  max-width: 1140px;
  min-height: 70px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.6);
  .authenticate {
    display: flex;
    align-items: center;
    .login {
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 100px;
      padding: 9px 30px;
    }
  }
  .nav-links-wrapper {
    flex: 0.75;
    padding-top: 5px;
  }
  @media (max-width: 870px) {
    .nav-links-wrapper,
    .authenticate {
      display: none;
    }

    .bugger-menu {
      display: flex;
    }
  }
`;

export const BurgerButton = styled.div`
  background-color: transparent;
  border-radius: 2px;
  width: 28px;
  height: 24px;
  padding: 0 6px;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
  font-family: "Inter";
  margin-right: 20px;

  .bar {
    width: 100%;
    border: 1.2px solid #3d3c3c;
    background-color: #3d3c3c;
    transition: transform ${({ expand }) => (expand ? "0.57s " : "0.8s")}
      cubic-bezier(0.4, 0.01, 0.165, 0.99);
    border-radius: 3px;
    position: absolute;
  }
  .bar:nth-child(2) {
    transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    opacity: ${({ expand }) => (expand ? "0 " : "1")};
    transition-delay: ${({ expand }) => (expand ? "0s" : ".2s")};
  }
  .bar:nth-child(1) {
    top: 1px;
    transform: ${({ expand }) =>
      expand
        ? "rotate(45deg) translate(39%,7px)"
        : "rotate(0deg) translate(0,0)"};
    width: ${({ expand }) => (expand ? "70%" : "50%")};
  }
  .bar:nth-child(3) {
    transform: ${({ expand }) =>
      expand
        ? " rotate(-45deg) translate(24%, -4px)"
        : "rotate(0deg) translate(0,0)"};
    bottom: 1px;
    width: 75%;
  }
`;

export const MobileNav = styled.div`
         width: 100%;
         height: 100vh;
         overflow-y: scroll;
         box-sizing: border-box;

         & .containerLogo {
           display: flex;
           padding: 0 20px;
           justify-content: space-between;
           align-items: center;
           opacity: 0.99;
           min-height: 169px;
           .image-wrapper {
             box-shadow: 0px 3px 6px #00000029;
             border-radius: 100%;
             opacity: 1;
             width: 36px;
             height: 36px;
             img {
               width: 36px;
               height: 36px;
               border-radius: 100%;
             }
           }
           .content-wrapper {
             h1 {
               text-align: left;
               letter-spacing: 0;
               color: #3d3c3c;
               font-size: 16px;
             }
             p {
               text-align: left;
               letter-spacing: 0;
               color: #717d7c;
               font-size: 12px;
             }
           }
         }
         & .linkContainer {
           color: rgba(255, 255, 255, 0.5);
           font-weight: 700;
           display: flex;
           box-sizing: border-box;
           margin-top: 20px;
           flex-direction: column;
           width: 100%;
           z-index: 9999;
           opacity: 0.99;
           justify-content: space-evenly;
           padding: 0 10px;
            height: 70%;

           .footer {
             margin-top: auto 0px;
             border-top: solid #00000029 2px;
              margin-top: auto 0px;
              height: 35%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }


           }
           .row {
             text-align: left;
             letter-spacing: 0;
             color: #3d3c3c;
             font-size: 14px;
             font-weight: lighter;
             display: flex;
             align-items: center;
             a {
               margin-left: 20px;
             }
           }
         }
       `;
