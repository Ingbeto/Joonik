import React from "react";
import LocationList from "./components/LocationList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Locations</h1>
      <LocationList />
    </div>
  );
};

export default App;
