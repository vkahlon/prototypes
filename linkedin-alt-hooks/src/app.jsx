import React, { useState } from 'react';

export default function App(props) {
  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000');
  // const sound = useRef();
  // const color = useRef();
  const submit = e => {
    e.preventDefault();
    // const soundValue = sound.current.value;
    // const color = sound.current.value;
    alert(`${sound} sounds like ${color}`);
    setColor('#000');
    setSound('');
  };
  return (
    <form onSubmit={submit}>
      <input value={sound} type="text" placeholder='Sound...' onChange={e => setSound(e.target.value)}/>
      <input value={color} type="color" onChange={e => setColor(e.target.value)} />
      <button>ADD</button>
      </form>
  );
}
