import "./App.css";
import { MoviesProvider } from "./Context/MoviesContext";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <MoviesProvider>
      <MovieCard />
    </MoviesProvider>
  );
}

export default App;
