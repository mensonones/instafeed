import React, { useState, useEffect } from "react";
import api from "./services/api";

import UserData from "./components/UserData";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await api.get().then(result => {
      console.log(result.data.data);
      setData(result.data.data);
    });
    return response;
  }

  return (
    <div className="App">
      <UserData data={data} />
    </div>
  );
}

export default App;
