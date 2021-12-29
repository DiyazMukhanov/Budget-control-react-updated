const EditCategories = props => {
  const toMainHandler = () => {
      props.onMainPage();
  }
  
  const goToAddHandler = () => {
      props.goToAddCat();
  }

  const catDeleteHandler = (id) => {
    props.onDeleteCat(id);
  };

  return (
      <div>
          <header>
              <button onClick={toMainHandler}>To Main</button>
              <h3>Edit Categories</h3>
              <button onClick={goToAddHandler}>Add new category</button>
          </header>
          <ul>
              {props.cats.map(cat => <li key={cat.id}>{cat.name} <button onClick={() => catDeleteHandler(cat.id)}>Delete</button></li>)}
          </ul>
      </div>
  );
};



export default EditCategories;