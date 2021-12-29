import React, {useState} from "react";
import './AddCategory.css';


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
      <div className="add-cat-div-1">
          <form onSubmit={addCatSubmitHandler}>
              <label>Add Category</label>
              <input onChange={newCatChangeHandler}></input>
              <button type="submit" className="add-cat-add-btn">Add</button>
          </form>
      </div>
  );
};


export default AddCategory;