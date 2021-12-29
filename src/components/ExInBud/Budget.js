import React, {useState} from "react";


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
      <div>
          <form onSubmit={addBudgetHandler}>
              <label>Add budget sum for this month</label>
              <input onChange={budgetChangeHandler}></input>
              <button type="submit">Add</button>
          </form>
          <button onClick={toMainHandler}>Main</button>
      </div>
  );
};



export default Budget;