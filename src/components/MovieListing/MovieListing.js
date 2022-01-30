import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { settings } from '../../common/setting';
import { getAllMovies, getAllShows } from './../../features/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss'

function MovieListing() {

  const movies=useSelector(getAllMovies);
  const shows= useSelector(getAllShows);

 
   const renderMovies= 
   movies && movies?.Response=== 'True'? 
 movies.Search.map((movie,index)=>{
  
    return  <MovieCard key={index} data={movie}/>;

    })
  
  :(
  <div className='movies-error'>
    <h3>{movies.Error}</h3>
    </div>
  )


  const renderShows= 
  shows && shows?.Response=== 'True'? 
shows.Search.map((movie,index)=>{
 
   return  <MovieCard key={index} data={movie}/>;

   })
 
 :(
 <div className='movies-error'>
   <h3>{shows.Error}</h3>
   </div>
 )
  return <div>
<div className='movie-wrapper'>
  <div className='movie-list'>
    <h2>Movies</h2>
   <div className="movie-container">
     
     <Slider {...settings}>{renderMovies}</Slider></div>


  </div>
  <div className='show-list'>
    <h2>Shows</h2>
    
    <Slider {...settings}>{renderShows}</Slider>



  </div>

</div>

  </div>;
}

export default MovieListing;
