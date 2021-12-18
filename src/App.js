
import './App.css';
import { randomFetch, searchFetch } from './utils';
import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function App() {

  const [imagesToShow, setimagesToShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    console.log("called only once");
    fetch(randomFetch)
      .then(response => response.json())
      .then(json => {
        console.log()
        setimagesToShow(json.data
          .map(gif =>
            gif.images.fixed_height.url
          ));
      })
      .catch(error => document.body.appendChild = error);
  }, []);

  let onChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          marginTop: "41px"
        }}>
          <TextField id="outlined-basic" label="gif search" variant="outlined" onChange={onChange} value={search} />
          <Button variant="contained" style={{
            marginTop: "16px",
            marginLeft: "9px"
          }}
            onClick={() => {
              fetch(searchFetch + search)
                .then(response => response.json())
                .then(json => {
                  console.log()
                  setimagesToShow(json.data
                    .map(gif =>
                      gif.images.fixed_height.url
                    ));
                })
                .catch(error => document.body.appendChild = error);
            }}
          >Search</Button>
        </div>
        <div style={{ marginLeft: 700, marginTop: 100, height: 500, width: 500 }}>
          <Grid container={true}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {
              imagesToShow.map(x =>
                <Grid item={true} key={x} >
                  <img
                    src={x}
                    width={500}
                    height={500}
                  />
                </Grid>
              )
            }
          </Grid>
        </div>
      </header>
    </div>
  );
}
export default App;
