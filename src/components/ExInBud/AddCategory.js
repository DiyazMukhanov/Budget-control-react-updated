import React, {useState} from "react";


const AddCategory = props => {
  const [enteredNewCat, setEnteredNewCat] = useState('');
  
  const newCatChangeHandler = (event) => {
     setEnteredNewCat(event.target.value);
     
  };

  const addCatSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddCategory(enteredNewCat);
    props.goToEditCategory();
  }

  return (
      <div>
          <form onSubmit={addCatSubmitHandler}>
              <label>Add Category</label>
              <input onChange={newCatChangeHandler}></input>
              <button type="submit">Add</button>
          </form>
      </div>
  );
};


export default AddCategory;