import ExpenseItem from "./Components/ExpenseItems.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem
        date={expenses[0].date.toISOString()}
        amount={expenses[0].amount}
        title={expenses[0].title}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date.toISOString()}
        amount={expenses[1].amount}
        title={expenses[1].title}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date.toISOString()}
        amount={expenses[2].amount}
        title={expenses[2].title}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date.toISOString()}
        amount={expenses[3].amount}
        title={expenses[3].title}
      ></ExpenseItem>
    </div>
  );
}

export default App;
