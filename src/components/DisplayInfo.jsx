import React from "react";
import srcImg from "../assets/source.png";
import destImg from "../assets/destination.png";
const DisplayInfo = ({ src, dest, speed }) => {
    // console.log(src, speed, dest);
    return (
        <div className="flex xs:flex-col justify-between sm:flex-row text-stone-200 text-sm bg-stone-700 border border-stone-700 rounded xs:w-90 xs:mx-auto sm:mx-1 items-center md:w-auto m-2">
            <div className="flex flex-col items-center justify-between p-4 mb-2">
                <div className="flex justify-start items-center mb-2">
                    <img
                        src={srcImg}
                        className=" text-left w-8 h-8 mt-1"
                        alt=""
                    />
                    <h3 className="text-left">Source</h3>
                </div>
                <ul className="flex flex-col pt-1">
                    <li className="my-1">Latitude: {src[0]}</li>
                    <li>Longitude: {src[1]} </li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-between p-4 mb-2">
                <div className="flex flex-col items-center">
                    <p>Speed </p>

                    <p className="">{speed === "" ? 0 : speed} kmph</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between p-4 mb-2">
                <div className="flex justify-start items-center mb-2">
                    <img src={destImg} className="w-8 h-8 mt-1" alt="" />
                    <h3 className="">Destination</h3>
                </div>
                <ul className="flex flex-col pt-1">
                    <li className="my-1">Latitude: {dest[0]}</li>
                    <li>Longitude: {dest[1]} </li>
                </ul>
            </div>
        </div>
    );
};

export default DisplayInfo;
