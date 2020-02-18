import styled from "styled-components";

export const Container = styled.div`
         max-width: 1140px;
         margin: 20px auto;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         box-sizing: border-box;
         .card-wrapper {
           display: flex;
           justify-content: center;
           align-items: center;
           width: 100%;
           display: flex;
           flex-flow: wrap;
         }
         .topic {
           text-align: left;
           letter-spacing: 0;
           color: #717d7c;
           opacity: 1;
           font-size: 16px;
           font-weight: normal;
         }
       `;

export const Card = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 3px 3px 5px #00000008;
  border-radius: 5px;
  width: 345px;
  padding: 14px 25px;
  margin: 10px;
  .info {
    .name {
      text-align: left;
      letter-spacing: 0;
      color: #3d3c3c;
      font-size: 16px;
    }
    .period {
      text-align: left;
      letter-spacing: 0;
      color: #717d7c;
      font-size: 12px;
      text-transform: capitalize;
      margin-top: 7px;
      span{
        margin-right: 10px;
      }
    }
  }
  .price {
    .price-data {
      display: flex;
      margin-top: 7px;

      p {
        margin-left: 10px;
      }
    }
    h1 {
      text-align: right;
      font-size: 16px;
      letter-spacing: 0;
      color: ${({ type }) => (type === "credit" ? "#39B54A" : "#ED1A3B")};
      font-weight: 400;
      font-size: 16px;
    }
    p {
      text-align: left;
      letter-spacing: 0;
      color: #717d7c;
      font-size: 12px;
    }
  }
  @media (max-width: 345px) {
    width: 100%;

    margin: 10px;
  }
`;
