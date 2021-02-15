import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RandomBeer(props) {
  let [beer, setbeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        console.log(res);
        setbeer(res.data);
      });
  }, []);

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt="no!" />
    </div>
  );
}

export default RandomBeer;