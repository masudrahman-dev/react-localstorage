import React from 'react';
import { adToDB } from '../../utilites/fakeDB';
import './Person.css';

const PersonDB = (props) => {
  const { _id, age, name, email } = props.data;
  const handler = (_id) => {
    adToDB(_id);
  };
  return (
    <div className='style'>
      <p>person ID:{_id} </p>
      <p>person age:{age}</p>
      <p>person Name:{name}</p>
      <p>person Email: {email}</p>
      <button onClick={() => handler(_id)}>Add to Card</button>
    </div>
  );
};

export default PersonDB;
