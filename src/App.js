import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const UN = (event) => {
    setUsername(event.target.value);
  };

  const UP = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
   
    const EUsername = 'john';
    const EPassword = 'pass1234'; 

    if (username === EUsername && password === EPassword) {
      setLoginStatus('Access Granted');
    } else {
      setLoginStatus('Access Denied');
    }
  };

  const loginStatusStyle = {
    color: loginStatus === 'Access Granted' ? 'green' : 'red',
  };

  return (
    
    <center style={{backgroundColor: "lightblue", height:"100vh"}}>
      <div className="App">
      <h1>Login</h1>
      <div>
        <label For="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={UN  }
        />
      </div>
      <div>
        <label For="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={UP}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p style={loginStatusStyle}>{loginStatus}</p>
    </div>
    </center>
  );
}

export default App;