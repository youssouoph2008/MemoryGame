// src/components/Card.jsx

export default function Card({ id, name, image, onClick }) {
    return (
      <div 
        onClick={() => onClick(id)}
        className="w-40 h-40 bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer 
                   hover:scale-105 active:scale-95 transition-all duration-200 flex flex-col items-center justify-center"
      >
        <img 
          src={image} 
          alt={name}
          className="w-28 h-28 object-contain"
        />
        <p className="text-white text-sm font-medium capitalize mt-2">{name}</p>
      </div>
    );
  }
