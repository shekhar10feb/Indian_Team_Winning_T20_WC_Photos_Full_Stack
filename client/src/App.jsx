import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Players from "./Players";

const baseURL = "http://localhost:5000/api/superhero";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  // const [index, setIndex] = useState(0);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="w-full flex justify-center items-center">
      {players.length > 0 ? (
        <div className="w-full flex justify-center items-center">
          <Players players={players} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
