import React, { useState, useEffect } from 'react';
export default function Effect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <div>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }
  // const [name, setName] = useState('Vick');
  // const [admin, setAdmin] = useState(false);
  // useEffect(() => {
  //   document.title = `Celebrate ${name}`;
  // }, [name]);
  // useEffect(() => {
  //   document.title = `Celebrate ${admin ? 'admin' : 'not admin'}.`;
  // }, [admin]);
  return (
    <p>No Users</p>
    // <section>
    //   <p>Congrats {name}!</p>
    //   <button onClick={() => setName('me')}>Change Now!</button>
    //   <p>{admin ? 'logged in' : 'not logged in'}</p>
    //   <button onClick={() => setAdmin(true)}>Admin</button>
    // </section>
  );
}
