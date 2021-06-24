import React from 'react';

function InviteFoodCard({food}) {
  return (
    <li>
      <h5>{food.name}</h5>
      <p>Quantity: {food.quantity}</p>

    </li>
  );
}

export default InviteFoodCard;
