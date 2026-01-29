import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainCointainer from "./MainCointainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  
  return <div>
    <Header/>
    <MainCointainer/>
    <SecondaryContainer/>
  </div>
}

export default Browse
