import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import { icon } from "leaflet";

const ICON_FIRE = icon({
  iconUrl: "./fire.ico",
  iconSize: [15, 15]
});

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Marker
          key={ev.id}
          icon={ICON_FIRE}
          position={[
            ev.geometries[0].coordinates[1],
            ev.geometries[0].coordinates[0]
          ]}
        >
          <Popup>
            <div className="location-info">
              <h2>Event Location Info</h2>
              <ul>
                <li>
                  ID: <strong>{ev.id}</strong>
                </li>
                <li>
                  TITLE: <strong>{ev.title}</strong>
                </li>
              </ul>
            </div>
          </Popup>
        </Marker>
      );
    }
    return null;
  });

  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </LeafletMap>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 34.80746,
    lng: -40.4796
  },
  zoom: 3
};

export default Map;
