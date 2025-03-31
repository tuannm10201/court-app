import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from 'react-leaflet';
import { Button } from 'reactstrap';
import 'leaflet.fullscreen';
import fullscreenIcon from '../../assets/images/map-fullscreen.svg';
import tennisBallIcon from '../../assets/images/tennis-ball-gray-icon.svg';
import L from 'leaflet';
import { useState } from 'react';
import { LOCATIONS } from '../../data/fake-data';

const ZOOM = 5;

const createCustomIcon = (name: string, selected?: boolean) => {
  return new L.DivIcon({
    iconSize: [0, 0],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    html: `<button class="marker-container bg-white rounded-pill align-items-center border-0 d-flex gap-1 border-light-gray${
      selected ? ' selected' : ''
    }">
        <div class="tennis-icon"></div>
        <div class="marker-text fw-semibold fs-6 lh-1 text-nowrap">${name}</div>
      </button>
    `,
  });
};

type Props = {
  locSelected: number | null;
  setLocSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Map({ locSelected, setLocSelected }: Props) {
  // useMapEvent('click', () => {
  //   const map = useMap();
  //   map.locate();
  // });

  // useMapEvent('locationfound', (event) => {
  //   console.log(event);
  // });

  return (
    <MapContainer
      center={[21.0285, 105.8542]}
      zoom={ZOOM}
      fullscreenControl
      fullscreenControlOptions={{
        position: 'topright',
        content: `<img alt="fullscreen" src=${fullscreenIcon} />`,
      }}
      className="w-100 h-100"
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MoveZoomControl />

      {LOCATIONS.map((loc) => (
        <CustomMarker
          key={loc.id}
          icon={createCustomIcon(loc.name, locSelected === loc.id)}
          position={[loc.lat, loc.lng]}
          title={loc.name}
          onClick={() => setLocSelected(loc.id)}
        />
      ))}
    </MapContainer>
  );
}

function CustomMarker({
  position,
  icon,
  title,
  onClick,
}: {
  position: L.LatLngExpression;
  icon: L.DivIcon;
  title: string;
  onClick: () => void;
}) {
  const map = useMap();
  return (
    <Marker
      position={position}
      icon={icon}
      title={title}
      eventHandlers={{
        click(e) {
          onClick();
          map.flyTo(e.latlng, ZOOM);
        },
      }}
    />
  );
}

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMapEvents({
    click() {
      // map.locate();
      // console.log(map);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MoveZoomControl() {
  const map = useMap();
  return (
    <div className="custom-zoom-controls d-flex gap-2 position-absolute">
      <Button
        onClick={() => map.zoomOut()}
        className="zoom-btn rounded-3 bg-white border-0 text-black"
      >
        <i className="bi bi-zoom-out" />
      </Button>
      <Button
        onClick={() => map.zoomIn()}
        className="zoom-btn rounded-3 bg-white border-0 text-black"
      >
        <i className="bi bi-zoom-in" />
      </Button>
    </div>
  );
}
