import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import useFetch from './useFetch';
import "./App.css";

function App () {
  // const [global, setGlobal] = useState({});
  const { data } = useFetch("https://api.covid19api.com/summary");

  return (
    <div className="App">
        <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
        {data ? <CardList countries={data.Countries} />: <div>Loading</div>}
    </div>
  );
}

export default App;
