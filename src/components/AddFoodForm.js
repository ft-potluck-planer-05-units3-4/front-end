import React, { useState } from 'react';

function AddFoodForm() {
  const [addFoodOpen, setAddFoodOpen] = useState(false);

  const onAddFoodOpen = () => {
    setAddFoodOpen(true);
  };

  const onAddFoodClose = () => {
    setAddFoodOpen(false);
  };

  return (addFoodOpen ? (
    <div className='add-food-modal'>
      <form>
	<input/>
	<button>Add Food</button>
      </form>
      <button onClick={onAddFoodClose}>Cancel</button>
    </div>) : (
      <button onClick={onAddFoodOpen}>Add Food</button>
    ));
}

export default AddFoodForm;
