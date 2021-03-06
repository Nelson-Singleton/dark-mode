import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from './hooks/useDarkMode'
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  //moved darkmode to App so that it can be aware of state.
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false);  

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    
    //if darkmode exists in state, ie the condition is true, set the class to dark-mode App.. Otherwise set class to app.
    <div className= {darkMode ? "dark-mode App" : "App"}>
    {/* pass slice of state to navbar via props */}
      <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
