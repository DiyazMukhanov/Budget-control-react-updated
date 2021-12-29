import './EditCategories.css';

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
      <div className='edit-categories-div'>
          <header>
              <button onClick={toMainHandler} className='btn btn-outline-primary edit-cats-toMain'>To Main</button>
              <h3>Edit Categories</h3>
              <button onClick={goToAddHandler} className='btn btn-outline-primary edit-cats-add-new'>Add new category</button>
          </header>
          <ul className='edit-cats-ul'>
              {props.cats.map(cat => <li key={cat.id}>{cat.name} <button onClick={() => catDeleteHandler(cat.id)} className='btn btn-outline-primary'>Delete</button></li>)}
          </ul>
      </div>
  );
};



export default EditCategories;