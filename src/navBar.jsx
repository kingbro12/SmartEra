import React from 'react';
import './CardGrid.css';

const CardGrid = () => {
  const cards = [
    { id: 1, title: 'Web Design', desc: 'Beautiful, modern interfaces.' },
    { id: 2, title: 'Development', desc: 'Robust and scalable code.' },
    { id: 3, title: 'Marketing', desc: 'Reach your target audience.' },
  ];

  return (
    <section className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-icon"></div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button className="card-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;