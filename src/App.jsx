// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import GameBoard from "./components/gameboard.jsx";

export default function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setClickedCards([]);
    setCurrentScore(0);
    setGameOver(false);
    fetchCards();
  }

  // Función para barajar las cartas (Fisher-Yates)
  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Fetch de Pokémon desde la API
  const fetchCards = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=16');
      const data = await response.json();

      const pokemonPromises = data.results.map(async (poke) => {
        const detailResponse = await fetch(poke.url);
        const detail = await detailResponse.json();
        return {
          id: detail.id,
          name: detail.name,
          image: detail.sprites.other['official-artwork'].front_default || 
                detail.sprites.front_default,
        };
      });

      const pokemonData = await Promise.all(pokemonPromises);
      
      // Barajar al cargar por primera vez
      setCards(shuffle(pokemonData));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setLoading(false);
    }
  };

  // Cargar las cartas al montar el componente
  useEffect(() => {
    fetchCards();
  }, []);

  // Función que se ejecuta cuando el usuario hace clic en una carta
  const handleCardClick = (id) => {
    if (gameOver) return;

    if (clickedCards.includes(id)) {
      setGameOver(true);

      setBestScore((prev) =>
        currentScore > prev ? currentScore : prev
      );

      return;
    }

    const newClicked = [...clickedCards, id];
    setClickedCards(newClicked);

    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    setBestScore((prev) =>
      newScore > prev ? newScore : prev
    );

    const won = newClicked.length === cards.length;
    if (won) {
      setGameOver(true);
      return;
    }

  setCards((prevCards) => shuffle(prevCards));
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header 
        title="Memory Game"
        currentScore={currentScore}
        bestScore={bestScore}
        onReset={resetGame}
      />

      <GameBoard 
        cards={cards} 
        onCardClick={handleCardClick} 
      />

      {/* Mensaje de Game Over */}
      {gameOver && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-10 rounded-2xl text-center border border-red-500">
            <h2 className="text-5xl font-bold text-red-500 mb-4">Game Over</h2>
            <p className="text-xl mb-6">
              Tu puntuación final: <span className="font-semibold">{currentScore}</span>
            </p>
            <button 
              onClick={resetGame}
              className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-lg font-medium rounded-xl transition-colors"
            >
              Jugar de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



