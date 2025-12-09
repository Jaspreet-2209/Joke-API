import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <>
    
      <header className="header">
        <h2>The Daily Giggle</h2>
      </header>

     
      <section className="hero">
        <h1 className="hero-title">Get Random Jokes Instantly </h1>
        <p className="hero-desc">
          A simple React app that demonstrates how to fetch data from a public API.  
          Click the button and enjoy a fresh joke every time!
        </p>

    
        <div className="gif-box">
          <img
            src="https://media.tenor.com/Me8VeYte7asAAAAM/laughing-haha.gif"
            alt="funny gif"
          />
        </div>

        <button className="btn pulse" onClick={fetchJoke}>
          Get Random Joke 
        </button>
      </section>

      {joke && (
        <div className="joke-box fade-in">
          <h3> Your Joke</h3>
          <p>{joke}</p>
        </div>
      )}

     
      <footer className="footer">
        <p>© {new Date().getFullYear()} • API Demo Project • Built with & React</p>
      </footer>
    </>
  );
}

export default App;
