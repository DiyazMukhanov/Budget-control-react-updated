import React, {useState} from "react";
import Expenses from "./Expenses";
import './AddExpense.css';

const AddExpense = props => {
//    const [enteredDate, setEnteredDate] = useState('');
   const [enteredCatName, setEnteredCatName] = useState('Home/Rent');
   const [enteredAmount, setEnteredAmount] = useState('');
   
   
//    const dateChangeHandler = event => {
//       setEnteredDate(event.target.value);
//       console.log(enteredDate);
//    };

   const catNameChangeHandler = event => {
    setEnteredCatName(event.target.value);
    console.log(enteredCatName);
   }

   const amountChangeHandler = event => {
    setEnteredAmount(parseInt(event.target.value));
    console.log(enteredAmount);
   };

   const saveExpenseHandler = () => {
       props.onSaveExpense(props.nameOfMonthToday, enteredCatName, enteredAmount );
    //    props.sumLeftCalc();
   }

   const toMainPage = () => {
       props.onMainPage();
   }

   const goToEditHandler = () => {
       props.goToEditCategory();
   }
   return (
       <div className="addExpense-div">
           <header className="addExpense-header">
               <button onClick={toMainPage} className="addExpense-main-btn">Main Page</button>
               <h3>Add Expense</h3>
               
           </header>
           <form className="addExpense-form">
               {/* <label className ="addexpense-label-date">Date</label> */}
               {/* <input onChange={dateChangeHandler} className="addexpense-input-date"></input> */}
               <label>Category</label>
               <select onChange={catNameChangeHandler}>
                   {props.cats.map(cat => <option value={cat.name}>{cat.name}</option>)}
               </select>
               <label>Amount</label>
               <input onChange={amountChangeHandler}></input>
               <button onClick={saveExpenseHandler} className=" addExpense-save">Save</button>
           </form>
           <button onClick={goToEditHandler} className=" addExpenses-edit-cat">Edit categories</button>
       </div>
   );
};


export default AddExpense;