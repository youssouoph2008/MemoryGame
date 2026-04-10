// src/components/Header.jsx

export default function Header({ 
    title = "Memory Game", 
    currentScore, 
    bestScore, 
    onReset 
  }) {
    return (
      <header className="bg-gray-950 py-6 px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-800">
        
        {/* Título del juego */}
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-gray-400 text-sm mt-1">¡No repitas ninguna carta!</p>
        </div>
  
        {/* Puntuaciones */}
        <div className="flex gap-10 mt-6 md:mt-0">
          <div className="text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest">Current Score</p>
            <p className="text-4xl font-semibold text-white">{currentScore}</p>
          </div>
  
          <div className="text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest">Best Score</p>
            <p className="text-4xl font-semibold text-emerald-400">{bestScore}</p>
          </div>
        </div>
  
        {/* Botones */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <button 
            onClick={onReset}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-colors"
          >
            Reset Game
          </button>
  
          <button 
            onClick={onReset}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors"
          >
            Play Again
          </button>
        </div>
  
      </header>
    );
  }