import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { shipIcon, sourceIcon, destIcon } from "./IconDefinitions";
import {
    calculateCoordinates,
    calculateDistance,
} from "../Util/MathCalculations";
const Map = () => {
    const [currentCoordinate, setCurrentCoordinate] = useState([
        13.0827, 80.2707,
    ]);
    const [counter, setCounter] = useState(0);
    const srcCoordinate = [13.0827, 80.2707];
    const destCoordinate = [17.6868, 83.2185];

    const coordinatesList = [
        ...calculateCoordinates(13.0827, 80.2707, 17.6868, 83.21855, 50),
    ];
    console.log(calculateDistance(13.0827, 80.2707, 17.6868, 83.21855));

    useEffect(() => {
        if (counter < coordinatesList.length) {
            const timer = setTimeout(() => {
                setCurrentCoordinate(() => {
                    console.log(counter);
                    let result = [
                        coordinatesList[counter][0],
                        coordinatesList[counter][1],
                    ];
                    return result;
                });
                setCounter((prev) => prev + 1);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [counter]);

    return (
        <MapContainer
            center={[14.27, 80.2707]}
            zoom={6}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='<a href="https://www.openstreetmap.org/copyright"> </a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={sourceIcon} position={srcCoordinate}>
                {" "}
                <Popup>Source</Popup>
            </Marker>
            <Marker icon={shipIcon} position={currentCoordinate}>
                <Popup>The Ship</Popup>
            </Marker>
            <Marker icon={destIcon} position={destCoordinate}>
                <Popup>Destination</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
