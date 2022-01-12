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
      <h1>Мой Бюджет</h1>
      <h2>{today.date}</h2>
      </header>
      <section className="main-page-section">
          
              <div>Затраты <span className="main-page-expenses">{props.sumOfTodayMonthExpenses}</span></div>
              
              <div><button onClick={props.expensesEntry} className="main-page-button">Добавить затраты</button></div>
              <div><button onClick={resetHandler} className="main-page-button">Сброс затрат</button></div>
              <div className="main-budget">Бюджет <span className="budget">{props.budget}</span></div>
              <div><button onClick={budgetEnterHandler} className="main-page-button">Изменить бюджет</button></div>
          
      </section>
      <footer className="main-page-footer">
          <h1>Осталось</h1>
          <h2>{props.sumLeft} тг</h2>
      </footer>
      </div>
  );
};


export default MainPage;