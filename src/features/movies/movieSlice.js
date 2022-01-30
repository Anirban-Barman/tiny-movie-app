import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi'
import { APIKey } from './../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {

    
        const response = await movieApi.get(`?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${term}&type=movie`)
            .catch((error) => {
                console.log(error);
            })
        return response.data

    

})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {

    
        const response = await movieApi.get(`?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${term}&type=series`)
            .catch((error) => {
                console.log(error);
            })
        return response.data

    

})

export const fetchAsyncMovieorShowDetails = createAsyncThunk("movies/fetchAsyncMovieorShowDetails", async (id) => {

    
        const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
            .catch((error) => {
                console.log(error);
            })
        return response.data

    

})

const initialState = {
    movies: {},
    shows:{},
    selectedMovieorShow:{}
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieorShow={}

        }

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,movies:payload}
        },
        
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected")
       
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,shows:payload}
        },
        [fetchAsyncMovieorShowDetails.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,selectedMovieorShow:payload}
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieorShow = (state) => state.movies.selectedMovieorShow;


export default movieSlice.reducer