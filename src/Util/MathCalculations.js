export const calculateCoordinates = (
    startX,
    startY,
    endX,
    endY,
    betweenCoordinates
) => {
    let coordinatesList = [];
    let destCoordinate = [endX, endY];

    // Calc the distance to each point
    let wholeDistanceX = endX - startX;
    let distanceX = wholeDistanceX / (betweenCoordinates + 1);
    let wholeDistanceY = endY - startY;
    let distanceY = wholeDistanceY / (betweenCoordinates + 1);

    // Add all new points
    for (let i = 1; i <= betweenCoordinates; i++) {
        // Compute current point
        let currentX = startX + i * distanceX;
        let currentY = startY + i * distanceY;

        // Create the point
        let coordinates = [currentX, currentY];

        coordinatesList.push(coordinates);
    }
    coordinatesList.push(destCoordinate);
    console.log(coordinatesList);
    return coordinatesList;
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const r = 6371; // km
    const p = Math.PI / 180;

    const a =
        0.5 -
        Math.cos((lat2 - lat1) * p) / 2 +
        (Math.cos(lat1 * p) *
            Math.cos(lat2 * p) *
            (1 - Math.cos((lon2 - lon1) * p))) /
            2;

    return 2 * r * Math.asin(Math.sqrt(a));
};

export const calculatefps = (distance) => {
    const duration = (distance * 1000) / 20;
    const totalFrames = duration * 2;
    // distancePerFrame = distance / totalFrames;

    return Math.trunc(totalFrames) - 1;
};
