import React,{useState,useEffect} from 'react'
import Widget from '../components/Widget'
import { Grid, Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';


export default function Home() {

  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {

      fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20%thr", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "5802320be3mshe93c8b81e3bcf58p1bd853jsn48a1c36ff8ac",
          "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setData(data.d)

        })
        .catch(err => {
          console.error(err);
        });

    }
    fetchData();

  }, []);





  const breakPoint = {
    default: 4,
    1100: 2,
    700: 2
  }
  return (
    <Container>

      <Masonry
        breakpointCols={breakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >

        {(typeof data != 'undefined') ? (
          data.map((movie) => (
            
              <Widget movie={movie} />
    
          ))) :
          (
            <div><img src="logo192.png" alt="Loading..." /></div>
          )}
      </Masonry>
    </Container>
  )
}
{/*  */ }