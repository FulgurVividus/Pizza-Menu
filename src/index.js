// index.js, it's really needs to be called index.js cause webpack expects the entry point to be called index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Component for Header
function Header() {
  return (
    // this the way of inline styling in JSX, first enter JS mode, then create JS object
    // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
    //   Fast Pizza Co.
    // </h1>

    <header className="header">
      <h1>Fast Pizza Co.</h1>
    </header>
  );
}

// Component for Menu
// Menu component renders multiple Pizza components by passing different props to each instance
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Rendering a list & Conditional Rendering */}
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* nesting component */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
      {/* reusing the same component */}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// In React we write new components using functions & declare them in top-level

// this component will contain some data about pizza
// props are like communication channel between parent and child components
// Pizza component accepts props and uses them to render details about a specific pizza
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Component for Footer
function Footer() {
  // since components are just JS functions, we can do any JS we want in them. Code is executed simply when the function is called, as soon as component is initialized
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're currently open!`);
  // } else {
  //   alert(`Sorry, we're closed`);
  // }

  // Conditional Rendering
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">ORDER</button>
        </div>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

// Render our App in the DOM (in v.18)
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode, during development it'll render our components twice to find certain bugs and will check for outdated parts of React APIs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
