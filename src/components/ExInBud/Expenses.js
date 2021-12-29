import React, {useState} from 'react';
import './Expenses.css';


const Expenses = props => {
  const [currentMonth, setCurrentMonth] = useState(props.months[11]);

  const monthDecrease = () => {
      if(currentMonth === props.months[0]){
          return;
      }
      setCurrentMonth(currentMonth => {
          const i = props.months.indexOf(currentMonth);
          const newMonth = props.months[i - 1];
          return newMonth;
      });
    console.log(currentMonth);
  }

  const monthIncrease = () => {
    if(currentMonth === props.months[11]){
        return;
    }
    setCurrentMonth(currentMonth => {
        const i = props.months.indexOf(currentMonth);
        const newMonth = props.months[i + 1];
        return newMonth;
    });
  
  }

  //Showing sum of expenses of chosen month
  const thisMonthExpenses = props.expenses.filter(expense => expense.month === currentMonth);
  let initialValue = 0;
  let thisMonthSum = thisMonthExpenses.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.sum;
  }, initialValue);

  const toMainPage = () => {
      props.onMainPage();
  }
   return (
       <div className='expenses-div'>
           <header className='expenses-header'>
               <div className=' expenses-back' onClick={toMainPage}>Main</div>
               <div className='expenses-month-changer'>
                 <button className='btn btn-outline-primary month-change-button' onClick={monthDecrease} >prev month </button>
                 <div className='expenses-month-show'>
                 <h3>{currentMonth}</h3> 
                 <h4>{thisMonthSum}</h4>
                 </div>
                 
                 <button className='btn btn-outline-primary month-change-button' onClick={monthIncrease}>next month</button>
               </div>
               <button className='expenses-plus' onClick={props.addExpenseEntry}>Add</button>
                  
           </header>
           <section className='expenses-section'>
           <ul className='expenses-ul'>
               {props.expenses.map(expense => expense.month === currentMonth && <li>{expense.catName} <span>{expense.sum}</span></li> )}  
           </ul>
           </section>
       </div>
   );
};


export default Expenses;