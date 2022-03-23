import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect}/>;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
  <>
  {createArray(totalStars).map((n, i) => (<Star
    key={i}
    selected={selectedStars > i}
    onSelect={() => setSelectedStars(i + 1)}
    />
  ))}
  <p>{selectedStars} of {totalStars}</p>
  </>
  );
}

export default function App(props) {
  const [status, setStatus] = useState('not delivered');
  const [checked, setChecked] = useState(false);
  const { name } = props;
  return (
    <>
      <div>I am {name} , {checked} and {status}</div>
      <button onClick={() => setStatus('Delivered')}> Click here</button>
      <div>
        <input type="checkbox" onChange={() => setChecked(!checked)}/>
        <p>{checked ? 'SHREK IS HERE' : 'not checked'}</p>
      </div>
      <StarRating />
    </>
  );
}
