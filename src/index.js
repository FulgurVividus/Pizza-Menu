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
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Component for Header
function Header() {
  return <h1>Fast Pizza Co.</h1>;
}

// Component for Menu
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      {/* nesting component */}
      <Pizza />
      {/* reusing the same component */}
      <Pizza />
      <Pizza />
    </div>
  );
}

// Component for Footer
function Footer() {
  // since components are just JS functions, we can do any JS we want in them. Code is executed simply when the function is called, as soon as component is initialized
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're currently open!`);
  // } else {
  //   alert(`Sorry, we're closed`);
  // }

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open !</footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
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
