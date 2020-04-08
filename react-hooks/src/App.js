import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [users, setQuery] = useState('')
  var e =  document.getElementById('textarea').value;
  useEffect(() => {
    fetch(
      `http://localhost:8000/index`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }, [users]);

  return (
    <div className="App">
      <div className="container">
        <h1>Nuvem Cinzas</h1>
        <div className="column">
          <form className="ui form">
            <textarea id="textarea" rows="10" cols="40" onChange={event => setQuery(event.target.value)}>
              ..*...**..
              ..........
              .**.......
              ..........
              ***.A..A..
              .*........
              .*....A...
              ...A......
              ..........
              ..........
              </textarea>
          </form>
        </div>
        <div className="column">
          <p>
            <b>Obs:</b>
                . = normal
                * = nuvem
                A = aeroporto
            </p>
        </div>
        <button id="solve-it" type="button">Solucionar</button>
      </div>
    </div>
  );
}

export default App
