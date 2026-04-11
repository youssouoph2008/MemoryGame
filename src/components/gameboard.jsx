// src/components/GameBoard.jsx

import Card from "./card";

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        
        {cards.map((card) => (
          <Card 
            key={card.id}           // Muy importante en React
            id={card.id}
            name={card.name}
            image={card.image}
            onClick={onCardClick}
          />
        ))}

      </div>
    </div>
  );
}