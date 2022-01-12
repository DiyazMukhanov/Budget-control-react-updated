import React, {useState} from 'react';


import './App.css';
import AddCategory from './components/ExInBud/AddCategory';

import AddExpense from './components/ExInBud/AddExpense';
import Budget from './components/ExInBud/Budget';
import EditCategories from './components/ExInBud/EditCategories';
import Expenses from './components/ExInBud/Expenses';
import Login from './components/ExInBud/Login';
import MainPage from './components/MainPage';
import ExpensesContext from './store/expenses-context';


function App() {
  const [openedPage, setOpenedPage] = useState('main');
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    const intialExpenses = JSON.parse(savedExpenses);
    return intialExpenses || [];
  });
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  
  //Checking today's month
  const d = new Date();
  let nameOfMonthToday = months[d.getMonth()];

  //Defining expenses of today's month
  const todaysMonthExpenses = expenses.filter(expense => expense.month === nameOfMonthToday);
  

  //Calculating sum expenses of today's month
   let initVal = 0;
   let sumOfTodayMonthExpenses = todaysMonthExpenses.reduce((accum, curVal) => {
      return accum + curVal.sum;
   }, initVal);
   
  


  const [categories, setCategories] = useState(
    () => {
      const savedCats = localStorage.getItem("categories");
      const initialCats = JSON.parse(savedCats);
      return initialCats || [{name: 'Home/Rent', id: 'cat1' },{name: 'Food', id: 'cat2' }, {name: 'Education', id: 'cat3' },{name: 'Utilities', id: 'cat4' }, {name: 'Parents', id: 'cat5'}, {name: 'Investments', id: 'cat6' }, {name: 'Sport', id: 'cat7' }, {name: 'Beauty', id: 'cat8'} ];
    }
    );
  
  // const users = [
  //   {
  //     userName: 'Diyaz',
  //     email: 'diyaz.mukhanov@gmail.com',
  //     password: 'Diyaz247757',
  //     userCategories: [{name: 'Home/Rent', id: 'cat1' },{name: 'Food', id: 'cat2' }, {name: 'Education', id: 'cat3' }],
  //     userExpenses: [{catName: 'Food', sum: 15000, month: 'Dec', id: 'ex1'}]
  //   }
  // ];
  // const [loggedInUser, setLoggedInUser] = useState('Diyaz');


  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    const initialBudget = parseInt(savedBudget);
    return initialBudget || 0;
  });
  const [sumLeft, setSumLeft] = useState(() => {
    const savedSumLeft = localStorage.getItem("sumLeft");
    const initialSumLeft = parseInt(savedSumLeft);
    return initialSumLeft || 0;
  });
  
  
  React.useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);
  
  React.useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);  

  React.useEffect(() => {
    localStorage.setItem('budget', budget.toString());
  }, [budget]);

  React.useEffect(() => {
    localStorage.setItem('sumLeft', sumLeft.toString());
  }, [sumLeft]);
  
  let initialValue = 0;
  let sum = expenses.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.sum;
  }, initialValue);

  const addBudgetHandler = (newBudget) => {
  
  console.log(sum);
    setBudget(newBudget);
    setSumLeft(() => {
      const updatedSumLeft = newBudget - sum;
      return updatedSumLeft;
    });
  };

  
  

  const expensesEntryHandler = () => {
    setOpenedPage('expenses');
  };

  const addExpenseEntryHandler =() => {
    setOpenedPage('addExpense'); 
  }
  const saveExpenseHandler = (enteredMonth, enteredCatName, enteredSum) => {
    setExpenses(prevExpenses => {
        const updatedExpenses = [...prevExpenses];
        updatedExpenses.unshift({catName: enteredCatName, sum: enteredSum, month: enteredMonth, id: Math.random().toString()});
        return updatedExpenses;
        
    });
    
    setSumLeft(prevLeftSum => {
      return prevLeftSum - enteredSum;
    });
    setOpenedPage('expenses');
    // localStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const onMainPageHandler = () => {
    setOpenedPage('main');
  };

  const goToEditCatHandler = () => {
    setOpenedPage('editCategories');
  }

  const budgetEntryHandler = () => {
    setOpenedPage('budget');
  }

  const addCategoryHandler = (newCat) => {
    setCategories(prevCats => {
      const updatedCats = [...prevCats];
      updatedCats.push({name: newCat, id: Math.random().toString()});
      return updatedCats;
    });
    localStorage.setItem('categories', JSON.stringify(categories));
  }
  const goToAddCatHandler = () => {
    setOpenedPage('addCategories');
  }



  const deleteCatHandler = (id) => {
    setCategories(prevCats => {
      const updatedCats = prevCats.filter(cat => cat.id !== id);
      return updatedCats;
    });
  }

  

  const resetExpensesHandler = () => {
    setExpenses([]);
    setSumLeft(budget);
  };

  

  if(openedPage === 'main'){
      return(
        
        <div className='App'>
          <MainPage expenses = {expenses} expensesEntry = {expensesEntryHandler} budgetEntry = {budgetEntryHandler} budget = {budget} sumLeft = {sumLeft} onResetExpenses = {resetExpensesHandler} sumOfTodayMonthExpenses = {sumOfTodayMonthExpenses}  />
        </div>
    
      );
  }
  if(openedPage === 'expenses'){
    return(
      <div className='App'>
        <Expenses expenses = {expenses}  addExpenseEntry = {addExpenseEntryHandler} months = {months} onMainPage = {onMainPageHandler} nameOfMonthToday = {nameOfMonthToday}/>
      </div>
    );
}

if(openedPage === 'addExpense'){
  return(
    <div className='App'>
      <AddExpense expenses = {expenses} onSaveExpense = {saveExpenseHandler} onMainPage = {onMainPageHandler} cats = {categories} goToEditCategory = {goToEditCatHandler} budget = {budget} nameOfMonthToday = {nameOfMonthToday} />
    </div>
  );
}

if(openedPage === 'editCategories'){
  return(
    <div className='App'>
      <EditCategories expenses = {expenses} onMainPage = {onMainPageHandler} cats = {categories} goToAddCat = {goToAddCatHandler} onDeleteCat = {deleteCatHandler}/>
    </div>
  );
}

if(openedPage === 'addCategories'){
  return(
    <div className='App'>
      <AddCategory expenses = {expenses} onMainPage = {onMainPageHandler} onAddCategory = {addCategoryHandler} goToEditCategory = {goToEditCatHandler}/>
    </div>
  );
}

if(openedPage === 'budget'){
  return(
    <div className='App'>
      <Budget onMainPage = {onMainPageHandler} onAddBudget = {addBudgetHandler}/>
    </div>
  );
}

if(openedPage === 'login'){
  return(
    <div className='App'>
      <Login/>
    </div>
  );
}

}

export default App;
