import React, { useEffect, useState } from 'react';
import PersonDB from '../PersonDB/PersonDB';

const Cosmatic = () => {
const [data , sateData] = useState([])
useEffect( () =>{
    fetch(`data.json`)
    .then(res => res.json())
    .then(data => sateData(data))
},[])
    
    return (
        <div>
            <h1>Wellcome to my store</h1>
            {
                data.map(singleDB => <PersonDB data={singleDB} key={singleDB._id}/> )
            }
        </div>
    );
};

export default Cosmatic;