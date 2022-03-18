import React, { useState } from 'react';

export default function HotButton(intialItems) {
  const [count, setCount] = useState(0);
  const [coldCount, setColdCount] = useState(0);
  let hotIn;
  let coldIn;
  if (count > 5) {
    hotIn = 'It is getting hot in here';
  }

  if (coldCount < -5) {
    coldIn = 'It is getting cold in here';
  }
  return (
    <>
      <h2>I am Button</h2>
      <p>{hotIn}</p>
      <p>{coldIn}</p>
      <div className='hot'><button className='hot-button' onClick={() => setCount(count + 1)}>{count}</button></div>
      <div className='cold'><button className='cold-button' onClick={() => setColdCount(coldCount - 1)}>{coldCount}</button></div>
    </>
  );
}
