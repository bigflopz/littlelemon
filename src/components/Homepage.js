import React from 'react'
import food1 from "../images/restauranfood.jpg";

export default function Homepage() {
  return (
    <section className="section1">
        <div className="info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <button className="button-reserve">Reserve Table</button>
        </div>
        <div className="image-container">
          <img className="main-img" src={food1} alt="food" />
        </div>
      </section>
  )
}
