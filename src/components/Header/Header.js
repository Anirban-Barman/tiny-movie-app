
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../../images/user.jpg';
import './Header.scss'
import { fetchAsyncMovies,fetchAsyncShows } from './../../features/movies/movieSlice';

function Header() {
  const dispatch = useDispatch()

  const [term ,setTerm]=useState("");
  const submit=(e)=>{
e.preventDefault();
if(term){
  dispatch(fetchAsyncMovies(term))
dispatch(fetchAsyncShows(term))
setTerm("")
}
else{
  alert("please enter search term")
} 


  }
  return <div className='header'>
    <Link to="/"> <div className='logo'>Movie App</div></Link> 
    <div className="search-bar">
      <form onSubmit={submit}>
        <input type="text" value={term} placeholder='Search Movies or Shows' name="" id="" onChange={(e)=>setTerm(e.target.value)} />
        <button type='submit'><i className='fa fa-search'></i></button>
        </form>
    </div>
      <div className='user-image'>
          <img src={user} alt='user'/>
      </div>
  </div>;
}

export default Header;
