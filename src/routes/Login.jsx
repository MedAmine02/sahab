import React, { useState } from 'react'
import SahabLogo from '../assets/img/sahab_logo.png'
import { Box, Button, Paper, TextField } from '@mui/material'

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const login = (username, password) => {
    const data = {
      username,
      password
    };
    const url = "http://127.0.0.1:8000/api/token/";
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response: ", data);
        // You can further process the 'data' here or return it to handle outside the function.
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    
    <body class="body-loginA">

      <div class="div-loginA">
        <div>
          <a><img src={SahabLogo} className="" alt="React logo"/></a>
        </div>
        <span id="#line" class="vertical-line-loginA"></span>
        <div class="div-login-inputs">
          
            <h2 class="big-title-sidentifier-loginA">Login</h2>
          
          <div>
            <form>
              <div class="petit-formA">
                <div>
                  <Paper sx={{ width: 500, height: 300, display: "flex", flexDirection: 'column', m: 2 }}>

                  <TextField
                  sx={{ m: 2}}
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                  sx={{ m: 2}}
                  label="Password"
                  variant="outlined"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                  sx={{ m: 2, mt: 4 }}
                  variant="contained"
                  onClick={() => {
                    login(username, password)
  .then((responseData) => {
    // Handle the response data here
    console.log("Logged in successfully:", responseData);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error during login:", error);
  });
                  }}
                  
                  >Confirmer</Button>
                  </Paper>
                  
                  <div class="div-button-connexion-loginA">
                    <button type="submit" class="button-Connecion-loginA">Connexion</button>
                  </div>

                  <div class="div-button-signup-loginA">
                    <button  class="button-SignUp-loginA">SignUp</button>
                  </div>

                </div>

              </div>
            </form>
          </div>




        </div>

      </div>


    </body>



  )
}

export default Login