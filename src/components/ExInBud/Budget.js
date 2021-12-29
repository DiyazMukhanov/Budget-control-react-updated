import React, {useState} from "react";
import './Budget.css';


const Budget = props => {
  const [enteredBudget, setEnteredBudget] = useState('');

  const toMainHandler = () => {
   props.onMainPage();
  };

  const budgetChangeHandler = (event) => {
    setEnteredBudget(parseInt(event.target.value));

  };

  const addBudgetHandler = (event) => {
      event.preventDefault();
      props.onAddBudget(enteredBudget);
      props.onMainPage();
  }

  return (
      <div className="budget-div">
          <form onSubmit={addBudgetHandler}>
              <label>Add budget sum for this month</label>
              <input onChange={budgetChangeHandler}></input>
              <button type="submit" className="btn btn-outline-primary budget-add-btn">Add</button>
          </form>
          <button onClick={toMainHandler} className="btn btn-outline-primary budget-main-btn">Main</button>
      </div>
  );
};



export default Budget;