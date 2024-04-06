import React from "react";
import "./App.css";
import Map from "./components/Map";
import DisplayInfoCard from "./components/DisplayInfoCard";
const App = () => {
    return (
        <div className="bg-stone-800 flex flex-col">
            <DisplayInfoCard></DisplayInfoCard>
            <Map></Map>
        </div>
    );
};

export default App;
