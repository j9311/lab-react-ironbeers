import React, { useState } from 'react';
import axios from 'axios';

function NewBeer(props) {
  const [name, setName] = useState('');

  function submitForm(e) {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', { name: name })
      .then((resp) => {
        console.log(resp);
      });
  }

  return (
    //I know i need to use post. here..... but I couldn't get it to work with online resources.
    <div>
      <form onSubmit={submitForm}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* <label for="name">Tagline</label>
                <input type="text" id="tagline"></input>
                <label for="name">Description</label>
                <input type="text" id="description"></input>
                <label for="name">First Brewed</label>
                <input type="text" id="first_brewed"></input>
                <label for="name">Brewer Tips</label>
                <input type="text" id="brewer_tips"></input>
                <label for="name">Attenuation</label>
                <input type="text" id="attenuation"></input>
                <label for="name">Contributed By</label>
                <input type="text" id="contributed_by"></input> */}
      </form>
    </div>
  );
}

export default NewBeer;
