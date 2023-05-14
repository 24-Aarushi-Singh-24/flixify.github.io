import React from 'react'
import Row from '../components/Row/Row';
import requests from '../api/requests';
import Banner from "../components/Banner/Banner";
import Navbar from '../components/Navbar/Navbar';
function NetflixShow() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Row title = "NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchURL = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchURL = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}/>
      <Row title = "Comedy" fetchURL = {requests.fetchComedyMovies}/>
      <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries}/>
      <Row title = "Horror" fetchURL = {requests.fetchHorrorMovies}/>
      <Row title = "Romance" fetchURL = {requests.fetchRomanceMovies}/>
    </div>
  )
}

export default NetflixShow
