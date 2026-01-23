import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () => {
  useNowPlayingMovies();
  
  return <div>
    <Header></Header>
  </div>
}

export default Browse
