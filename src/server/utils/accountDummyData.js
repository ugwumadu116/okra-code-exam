export default {
  Accounts: [
    {
      id: 1,
      name: "unity bank",
      bankImg:
        "data:image/png;base64,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",
      totalBalance: "50,127,344.20",
      totalCredit: "37,234.22",
      totalDebit: "17,223.23",
      owner: "1",
      history: [
        {
          id: 1,
          Description: "Bank Transfer",
          Amount: "100,000.00",
          type: "credit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 2,
          Description: "Airtime Subscription",
          Amount: "12,000.00",
          type: "Debit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 3,
          Description: "NIBSS Instant Payment Outward",
          Amount: "5,000.00",
          type: "Debit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        }
      ]
    },
    {
      id: 2,
      name: "gt bank",
      bankImg:
        "data:image/png;base64,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",
      totalBalance: "550,234.11",
      totalCredit: "10,234.22",
      totalDebit: "17,223.23",
      owner: "4",
      history: [
        {
          id: 1,
          Description: "Bank Transfer",
          Amount: "90,000.00",
          type: "credit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 2,
          Description: "Airtime Subscription",
          Amount: "15,000.00",
          type: "Debit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 3,
          Description: "NIBSS Instant Payment Outward",
          Amount: "5,000.00",
          type: "Debit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        }
      ]
    },
    {
      id: 3,
      name: "access bank",
      img:
        "data:image/png;base64,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",
      totalBalance: "950,234.43",
      totalCredit: "37,234.22",
      totalDebit: "17,223.23",
      owner: "2",
      history: [
        {
          id: 1,
          Description: "NIBSS Instant Payment Outward",
          Amount: "10,000.00",
          type: "credit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 2,
          Description: "Airtime Subscription",
          Amount: "10,000.00",
          type: "credit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        },
        {
          id: 3,
          Description: "Bank Transfer",
          Amount: "10,000.00",
          type: "credit",
          time: "5:01 PM",
          date: "15 Feb 2020"
        }
      ]
    }
  ]
};
