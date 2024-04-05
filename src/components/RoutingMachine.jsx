import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        waypoints: [L.latLng(13.0827, 80.2707), L.latLng(17.6868, 83.2185)],
        // lineOptions: {
        //     styles: [{ color: "#6FA1EC", weight: 4 }],
        // },
        show: false,
        addWaypoints: true,
        // routeWhileDragging: true,
        // draggableWaypoints: true,
        // fitSelectedRoutes: true,
        showAlternatives: false,
    });
    console.log(instance.waypoints);
    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
