import React, {useState, useReducer} from "react";
import Expenses from "./Expenses";
import './AddExpense.css';

const amountReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
     return {value: action.val, isValid:action.val > 0}
  };
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid:state.value.toString().trim().length > 0 }
  };
  return {value:0, isValid: false};
};

const AddExpense = props => {
//    const [enteredDate, setEnteredDate] = useState('');
   const [enteredCatName, setEnteredCatName] = useState('Home/Rent');
   const [enteredAmount, setEnteredAmount] = useState('');

   const [amountState, dispatchAmount] = useReducer(amountReducer, 
      {value: 0, isValid: null}
   );
   
   
//    const dateChangeHandler = event => {
//       setEnteredDate(event.target.value);
//       console.log(enteredDate);
//    };

   const catNameChangeHandler = event => {
    setEnteredCatName(event.target.value);
    
   }

   const amountChangeHandler = event => {
    dispatchAmount({type: 'USER_INPUT', val: parseInt(event.target.value)});
   };

   const amountValidityHandler = () => {
    dispatchAmount({type:'INPUT_BLUR'});
   };

   const saveExpenseHandler = (event) => {
       event.preventDefault();
       if(amountState.value === 0){
           dispatchAmount({isValid: false}); 
          return;
       } else {
        props.onSaveExpense(props.nameOfMonthToday, enteredCatName, amountState.value );
       }
       
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
               <button onClick={toMainPage} className="addExpense-main-btn">Главная</button>
               <h3>Добавить затраты</h3>
               
           </header>
           <form className="addExpense-form">
               {/* <label className ="addexpense-label-date">Date</label> */}
               {/* <input onChange={dateChangeHandler} className="addexpense-input-date"></input> */}
               <label>Категория</label>
               <select onChange={catNameChangeHandler}>
                   {props.cats.map(cat => <option value={cat.name}>{cat.name}</option>)}
               </select>
               <label>Сумма</label>
               <input onChange={amountChangeHandler} onBlur={amountValidityHandler} className={amountState.isValid === false && 'invalid'} ></input>
               <button onClick={saveExpenseHandler} className=" addExpense-save">Сохранить</button>
           </form>
           <button onClick={goToEditHandler} className=" addExpenses-edit-cat">Изменить категории</button>
       </div>
   );
};


export default AddExpense;