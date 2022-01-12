import React, {useState} from "react";
import './Budget.css';


const Budget = props => {
  const [enteredBudget, setEnteredBudget] = useState('');
  

  const toMainHandler = () => {
   props.onMainPage();
  };

  const budgetChangeHandler = (event) => {
    setEnteredBudget(event.target.value);

  };

  const addBudgetHandler = (event) => {
      event.preventDefault();
      if(enteredBudget.trim().length < 1){
         return;
      }
      props.onAddBudget(parseInt(enteredBudget));
      props.onMainPage();
  }

  return (
      <div className="budget-div">
          <form onSubmit={addBudgetHandler}>
              <label>Добавь бюджет на этот месяц</label>
              <input onChange={budgetChangeHandler}></input>
              <button type="submit" className="budget-add-btn">Добавить</button>
          </form>
          <button onClick={toMainHandler} className="budget-main-btn">Главная</button>
      </div>
  );
};



export default Budget;