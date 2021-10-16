import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    {
      name: 'Dev Ed',
      message: 'Lorien Ipsum cure the best drow is a dead drow Short ones you did well.',
      likes: '♥ 954'
    },
    {
      name: 'Traversy Media',
      message: 'Lorien Ipsum impetous ones incognito where are we meeting Saturday.',
      likes: '♥ 546'
    },
    {
      name: 'Mosh',
      message: 'Lorien Ipsum may thy paths be green and the breeze on thy back May February Hail.',
      likes: '♥ 675'
    }
  ]);


  return (
    <div className="app">

      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}

    </div>
  );
}

export default App;