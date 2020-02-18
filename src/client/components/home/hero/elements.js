import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
  }
  .total-balance {
    text-align: center;
    letter-spacing: 0;
    color: #717d7c;
    font-size: 14px;
  }
  .total-price {
    text-align: left;
    letter-spacing: 0;
    color: #3d3c3c;
    font-weight: 400;
    font-size: 48px;
  }
  hr {
    width: 90%;
    border: 1px whitesmoke solid;
  }
  .expenses {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 30px 0;
    p {
      text-align: left;
      letter-spacing: 0;
      color: #717d7c;
      font-size: 12px;
    }
    h1 {
      letter-spacing: 0;
      color: #3d3c3c;
      font-weight: 300;
      font-size: 20px;
    }
  }
  .image-wrapper {
    width: 90px;
    height: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    background: #39b54a 0% 0% no-repeat padding-box;
    border-radius: 5px;
    color: #ffffff;
    padding: 15px 35px;
    border: none;
    text-align: center;
    letter-spacing: 0;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .credit,
  .debit {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }
`;

export default Container;
