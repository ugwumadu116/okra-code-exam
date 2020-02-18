import React from "react";
import { Container, Card } from "./elements";
import { FaShare, FaReply } from "react-icons/fa";

const App = ({ transactions }) => {
  return (
    <Container>
      <h1 className="topic">Transactions History</h1>
      <div className="card-wrapper">
        {transactions.map(item => (
          <Card key={item.id} type={item.type}>
            <div className="info">
              <div className="name">{item.Description}</div>
              <div className="period">
                <span>
                  {item.date}
                </span>
                <span>{item.time}</span>
              </div>
            </div>
            <div className="price">
              <h1>{item.Amount}</h1>
              {item.type === "credit" ? (
                <div className="price-data">
                  <FaShare color="#39B54A" />
                  <p>Credit</p>
                </div>
              ) : (
                <div className="price-data">
                  <FaReply size="12px" color="#ED1A3B" />
                  <p>Debit</p>
                </div>
              )}
            </div>
          </Card>
        ))}

      </div>
    </Container>
  );
};

export default App;
