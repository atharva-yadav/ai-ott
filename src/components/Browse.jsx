import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import Header from "./Header"
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const Browse = () => {
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const jsonResponse = await response.json();
    dispatch(addNowPlayingMovies(jsonResponse));
    console.log(jsonResponse);
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
  return <div>
    <Header></Header>
  </div>
}

export default Browse
