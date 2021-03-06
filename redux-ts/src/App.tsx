import React from 'react';
import {Provider} from "react-redux";
import { store } from './state'
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <div>
          <h1>Search for a package</h1>
          <RepositoriesList />
        </div>
      </Provider>
    </div>
  );
}

export default App;
