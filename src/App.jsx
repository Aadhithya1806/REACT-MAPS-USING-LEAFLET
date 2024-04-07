import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import DisplayInfoCard from "./components/InputContainer";
import DisplayInfo from "./components/DisplayInfo";
const App = () => {
    const [currValue, setCurrValue] = useState("");
    const [isStarted, setIsStarted] = useState(false);
    const srcCoordinate = [22.1696, 91.4996];
    const destCoordinate = [22.2637, 91.7159];

    const clickHandler = (value) => {
        setCurrValue(() => {
            return value;
        });
        setIsStarted(true);
    };

    const resetHandler = () => {
        setIsStarted(() => {
            return false;
        });
    };

    return (
        <div className="flex flex-col bg-stone-800">
            <div className="flex xs:flex-col md:flex-row justify-between mx-auto  mt-4 mb-1 w-75%">
                {" "}
                <DisplayInfo
                    src={srcCoordinate}
                    dest={destCoordinate}
                    speed={currValue}
                ></DisplayInfo>
                <DisplayInfoCard
                    resetFlag={isStarted}
                    resetHandler={resetHandler}
                    clickHandler={clickHandler}
                ></DisplayInfoCard>
            </div>
            <div className="px-3 ">
                <Map
                    source={srcCoordinate}
                    destination={destCoordinate}
                    speed={currValue}
                    isStarted={isStarted}
                ></Map>
            </div>
        </div>
    );
};

export default App;
