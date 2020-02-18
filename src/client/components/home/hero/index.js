import React from "react";
import { FaShare, FaReply } from "react-icons/fa";
import Container from "./elements";

const App = ({ transactions }) => {
  return (
    <Container>
      <div className="hero-wrapper">
        <p className="total-balance">Total balance</p>
        <h1 className="total-price">{transactions.totalBalance}</h1>
        <div className="image-wrapper">
          <img src={transactions.bankImg} alt="bank" />
        </div>
        <hr />
        <div className="expenses">
          <div>
            <p>Total credit</p>
            <div className="credit">
              <FaShare color="#39B54A" />
              <h1>{transactions.totalCredit}</h1>
            </div>
          </div>
          <div>
            <p>Total debit</p>
            <div className="debit">
              <FaReply color="#ED1A3B" />
              <h1>{transactions.totalDebit}</h1>
            </div>
          </div>
        </div>
        <button type="button">Connnect Your Bank</button>
      </div>
    </Container>
  );
};

export default App;
