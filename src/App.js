import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() =>{
    const url ='https://api.giphy.com/v1/gifs/search?q=patrick&api_key=24kyDCPZdvg0GaJxieqLVd0gFB9EPVcF&limit=9'
    axios.get(url)
    .then(function(result){
      console.log(result.data.data)
      setGiphy(result.data.data);
      setLoading(false);
    })
    .catch(function(error){
      setError(true);
      console.log(error.message)
      setErrorMessage(error.message)
      setLoading(false);
    });
  }, []);

  return (
    <div className="wrapper">
      <h2>Call API</h2> 
        <div className="containerGif">                      
          {loading ? (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          ) : (
              error ? (
                <div>{errorMessage}</div>
              ) : (
                  giphy.map((item, index) => (
                  <ul className="wrapper" key={index}>
                    <li><img src={item.images.original.url} alt="Giphy" /></li>
                    <li>{item.title}</li>
                    <li>{item.type}</li>
                  </ul>
                ))
              )
          )
          }
        </div>
    </div>
    
  );
};
export default App;