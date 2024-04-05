import { Icon, routing } from "leaflet";
import source from "../assets/source.png";
import destination from "../assets/destination.png";
import ship from "../assets/ship.png";
export const sourceIcon = new Icon({
    iconUrl: source,
    iconSize: [60, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

export const destIcon = new Icon({
    iconUrl: destination,
    iconSize: [60, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

export const shipIcon = L.icon({
    iconUrl: ship,
    iconSize: [30, 75],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

export default { shipIcon, sourceIcon, destIcon };
