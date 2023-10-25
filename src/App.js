import { useState } from "react";
import "./App.css";
import peoples from "./Data";

const App = () => {
  const [people, setPeoples] = useState(peoples);
  return (
    <div className="app-com">
      <div className="sticky">
        <div className="container">
          <div className="title">
            <h1>{people.length} Birthday Today</h1>
          </div>
          <div className="card-wrapper">
            {people.length > 0 ? (
              " "
            ) : (
              <h1 className="cleared">No Birthdays</h1>
            )}
            {people.map((p) => {
              return (
                <div className="person" key={p.id}>
                  <img src={p.image} alt="profile"></img>
                  <div>
                    <h4>{p.fullName}</h4>
                    <h4 className="date">
                      <i className="fa-solid fa-cake-candles"></i>
                      {p.Dob}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn"
            onClick={() => {
              let btn = document.querySelector(".btn");
              console.log(btn);
              btn.classList.add("clear");
              setPeoples([]);
            }}
          >
            <i className="fa-solid fa-trash"></i>
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
