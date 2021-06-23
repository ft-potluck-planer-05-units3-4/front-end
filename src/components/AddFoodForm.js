import React, { useState } from 'react';

function AddFoodForm({onAddFood}) {
  const [formVal, setFormVal] = useState({
    category: '',
    quantity: '1',
    name: ''
  });

  const [Open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    onAddFood({
      ...formVal,
      quantity: Number(formVal.quantity)
    });
  };
  
  return (Open ? (
    <div className='add-food-modal'>
      <form onSubmit={onSubmit}>
	<input
	  name='name'
	  value={formVal.name}
	  onChange={onChange}
	  type='text'
	  placeholder='Food Name'
	/>
	<input
	  name='quantity'
	  value={formVal.quantity}
	  onChange={onChange}
	  type='number'
	  min='0'
	  step='any'
	/>
	<input
	  name='category'
	  value={formVal.category}
	  onChange={onChange}
	  type='text'
	  placeholder='Food Category'
	/>
	<button>Add Food</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>) : (
      <button onClick={onOpen}>Add Food</button>
    ));
}

export default AddFoodForm;
