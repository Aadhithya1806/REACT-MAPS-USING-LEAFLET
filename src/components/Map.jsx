import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { shipIcon, sourceIcon, destIcon } from "./IconDefinitions";
import "./Map.css";
import {
    calculateCoordinates,
    calculateDistance,
    calculatefps,
} from "../Util/MathCalculations";
//y2-y1/x2-x1 = tan 0

const calcAngle = (x1, y1, x2, y2) => {
    const radAngle = Math.atan((y1 - y2) / (x1 - x2));
    return (radAngle * 180) / Math.PI;
};

const angle = calcAngle(22.1696, 91.4996, 22.2637, 91.7159);
// console.log(angle);
const Map = ({ speed, isStarted }) => {
    console.log(typeof speed);
    const [hasEnded, setHasEnded] = useState(isStarted);
    const [currentCoordinate, setCurrentCoordinate] = useState([
        22.1696, 91.4996,
    ]);
    const [counter, setCounter] = useState(0);
    const srcCoordinate = [22.1696, 91.4996];
    const destCoordinate = [22.2637, 91.7159];
    const distance = calculateDistance(22.1696, 91.4996, 22.2637, 91.7159);
    const speedInt = +speed;
    const totalHours = speedInt > 1 ? distance / (speedInt * (5 / 18)) : 0;
    const totalBetweenCoordinates = Math.ceil(totalHours);

    console.log("total Points", totalBetweenCoordinates);
    // const betweenCoordinates = calculateNoOfCoordinates(distance);
    console.log(distance);
    const coordinatesList = [
        ...calculateCoordinates(
            22.1696,
            91.4996,
            22.2637,
            91.7159,
            totalBetweenCoordinates
        ),
    ];

    useEffect(() => {
        if (!isStarted) {
            setCurrentCoordinate(() => {
                setCounter(0);
                return srcCoordinate;
            });
        } else {
            if (counter < coordinatesList.length) {
                const timer = setTimeout(() => {
                    setCurrentCoordinate(() => {
                        console.log("Counter" + counter);
                        let result = [
                            coordinatesList[counter][0],
                            coordinatesList[counter][1],
                        ];
                        console.log(result);
                        return result;
                    });

                    setCounter((prev) => prev + 1);
                }, 500);

                return () => clearTimeout(timer);
            }
        }
    }, [counter, isStarted]);
    console.log(isStarted);
    return (
        <MapContainer center={[22.23, 91.6]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={sourceIcon} position={srcCoordinate}>
                {" "}
                <Popup>Source</Popup>
            </Marker>
            <Marker
                rotationAngle={angle}
                icon={shipIcon}
                position={currentCoordinate}
            >
                <Popup>The Ship</Popup>
            </Marker>
            <Marker icon={destIcon} position={destCoordinate}>
                <Popup>Destination</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
