import React from 'react';
import { adToDB, removeToDB } from '../../utilites/fakeDB';
import './Person.css';

const PersonDB = (props) => {
  // console.log(props);
  const { _id, age, name, email } = props.data;
  const handler = (_id) => {
    adToDB(_id);
  };
  const removeToCart = (id)=>{
    removeToDB(id)
  }
  return (
    <div className='style'>
      <p>person ID:{_id} </p>
      <p>person age:{age}</p>
      <p>person Name:{name}</p>
      <p>person Email: {email}</p>
      <button onClick={() => handler(_id)}>Add to Card</button>
      <button onClick={() => removeToCart(_id)}>remove to cart</button>
    </div>
  );
};

export default PersonDB;
