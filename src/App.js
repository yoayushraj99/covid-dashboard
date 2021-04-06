import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import useFetch from './useFetch';
import "./App.css";
import CircularProgress from '@material-ui/core/CircularProgress';

function App () {
  // const [global, setGlobal] = useState({});
  const { data } = useFetch("https://api.covid19api.com/summary");

  return (
    <div className="App">
        <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
        {data ? <CardList countries={data.Countries} />: <CircularProgress color="secondary" />}
    </div>
  );
}

export default App;
