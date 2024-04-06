import React from "react";

const DisplayInfoCard = () => {
    return (
        <div className="flex justify-between border border-rounded border-gray-100 w-50 md:w-auto mx-auto my-8 text-stone-200">
            <div className="flex flex-col justify-between p-2">
                <h3 className="mt-0 mb-4">Source</h3>
                <ul>
                    <li>Latitude : 21.22</li>
                    <li>Longitude: 92.36</li>
                </ul>
            </div>
            <div className="flex flex-col justify-between p-2 mt-2">
                <p>Speed(kmph)</p>
                <button className="">Start</button>
            </div>
            <div className="flex flex-col justify-between p-2 ">
                <h3>Destination</h3>
                <ul>
                    <li>Latitude : 21.22</li>
                    <li>Longitude: 92.36</li>
                </ul>
            </div>
        </div>
    );
};

export default DisplayInfoCard;
