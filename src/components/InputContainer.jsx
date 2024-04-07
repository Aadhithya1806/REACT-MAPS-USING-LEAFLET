import React, { useEffect, useState } from "react";

const DisplayInfoCard = ({ clickHandler, resetHandler }) => {
    const [currValue, setCurrValue] = useState("");

    const handleUserInput = (event) => {
        setCurrValue(() => {
            return event.target.value;
        });
    };

    const resetInputBox = () => {
        setCurrValue("");
        resetHandler();
    };

    return (
        <div className="flex flex-col  text-stone-200 bg-stone-700 border border-stone-700 rounded xs:w-90 xs:mx-auto sm:mx-1 items-center md:w-auto my-2 ">
            <div className="mb-2 p-4">
                <label
                    htmlFor="input-box"
                    className="text-stone-200 mr-1 enabled:hover:border-gray-400 focus disabled:opacity-75"
                >
                    Enter Speed{" "}
                </label>
                <input
                    min={0}
                    className="text-stone-800 "
                    type="number"
                    onChange={handleUserInput}
                    value={currValue}
                    required
                />
                {!currValue ? (
                    <p className="text-red-500 text-md text-right">
                        Please Enter Speed To Start Moving
                    </p>
                ) : (
                    <p className="text-red-500 invisible">
                        Please enter speed to start
                    </p>
                )}
            </div>
            <div className="flex flex-row w-full justify-end p-3">
                {!currValue ? (
                    <button
                        disabled={true}
                        onClick={() => clickHandler(currValue)}
                        className="text-stone-500 mr-2 px-2 bg-stone-700  "
                    >
                        Start
                    </button>
                ) : (
                    <button
                        disabled={false}
                        onClick={() => clickHandler(currValue)}
                        className="text-stone-200 border border-text-200 hover:bg-stone-200 hover:text-stone-700 mr-2 px-2"
                    >
                        Start
                    </button>
                )}

                <button
                    onClick={resetInputBox}
                    className="text-stone-200 hover:bg-stone-100 hover:text-stone-700 px-2 "
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default DisplayInfoCard;
