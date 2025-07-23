import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://game-review-app.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Website goes here</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.uid}>
              <strong>{game.name}</strong> <br />
              Review: {game.review} <br />
              Rating: {game.rating}/5
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
