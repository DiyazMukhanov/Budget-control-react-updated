import React, {useState} from "react";
import './MainPage.css';

const MainPage = props => {
  const [today, setToday] = useState({date: new Date().toLocaleString().substring(0,10)});  
  
  let initialValue = 0;
  let sum = props.expenses.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.sum;
  }, initialValue);

  const budgetEnterHandler = () => {
    props.budgetEntry();
  };
 
  const resetHandler = () => {
    props.onResetExpenses();
  }; 

  return (
      <div className="main-page">
      <header className="main-page-header">
      <h1>Home Budget</h1>
      <h2>{today.date}</h2>
      </header>
      <section className="main-page-section">
          <ul>
              <li  key="expenses" >Expenses <span className="main-page-expenses">{props.sumOfTodayMonthExpenses}</span><button onClick={props.expensesEntry} className="main-page-expense-button">Add/View Expenses</button> <button onClick={resetHandler} className="main-page-reset-button">Reset expenses</button></li> 
              <li key="budget" className="main-li-budget">Budget <span className="budget">{props.budget}</span><button onClick={budgetEnterHandler} className="main-page-budget-button">Change budget</button></li>
          </ul>
      </section>
      <footer className="main-page-footer">
          <h1>Available</h1>
          <h2>{props.sumLeft} tg</h2>
      </footer>
      </div>
  );
};


export default MainPage;