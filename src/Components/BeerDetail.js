  
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetail(props) {
  let [beer, setbeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then((res) => {
        console.log(res);
        setbeer(res.data);
      });
  }, []);

  console.log(props.match.params.id);
  return (
    <div>
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <img src={beer.image_url} alt="wine ot" />
    </div>
  );
}

export default BeerDetail;