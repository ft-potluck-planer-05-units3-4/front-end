import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import styled from 'styled-components';

const StyledInput = styled(Input)`
width: 95%;
`;

function AddFoodForm({onAddFood}) {
  const [formVal, setFormVal] = useState({
    category: '',
    quantity: '',
    name: ''
  });

  const [isOpen, setIsOpen] = useState(false);

  const openToggle = () => {
    setIsOpen(!isOpen);
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
      quantity: formVal.quantity
    });
    setIsOpen(false);
  };
  
  return (
    <>
      <Modal isOpen={isOpen} toggle={openToggle}>
        <ModalHeader toggle={openToggle}>Add Food</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='food-name-input'>
                Name
              </Label>
              <StyledInput
                name='name'
                value={formVal.name}
                onChange={onChange}
                type='text'
                id='food-name-input'
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Quantity
              </Label>
              <StyledInput
                name='quantity'
                value={formVal.quantity}
                onChange={onChange}
                type='text'
                id='food-quantity-input'
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Category
              </Label>
              <StyledInput
                name='category'
                value={formVal.category}
                onChange={onChange}
                type='text'
              />
            </FormGroup>
            <button>Add Food</button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button onClick={openToggle}>Cancel</button>
        </ModalFooter>
      </Modal>
      <button onClick={openToggle}>Add Food</button>
    </>
  );
}

export default AddFoodForm;
