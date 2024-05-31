// index.js, it's really needs to be called index.js cause webpack expects the entry point to be called index.js

import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Components always must start from the capital letter & return some markup
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      {/* nesting component */}
      <Pizza />
      {/* reusing the same component */}
      <Pizza />
      <Pizza />
    </div>
  );
}

// In React we write new components using functions & declare them in top-level

// this component will contain some data about pizza
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// Render our App in the DOM (in v.18)
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode, during development it'll render our components twice to find certain bugs and will check for outdated parts of React APIs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
