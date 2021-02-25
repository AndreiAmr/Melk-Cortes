import { MapContainer, Marker, TileLayer } from "react-leaflet";
import {RiSendPlaneFill} from "react-icons/ri";

import { Container, LeafletMap } from "../styles/pages/local";

function Local() {
    return (
        <Container>
            <h1> Localidade </h1>
            <p> Aliquam bibendum neque vitae erat euismod, bibendum volutpat metus iaculis. Sed eget sagittis risus. </p>

            <LeafletMap>
                <MapContainer className="leaflet-map" center={[-23.7642516, -46.6801928]} zoom={15}>
                    <TileLayer
                        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'></a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'></a></strong>"
                        url="https://api.mapbox.com/styles/v1/soneca-dev/ckjnw54bp38jf19mlaegh8b4i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic29uZWNhLWRldiIsImEiOiJja2c3aWwyOGEwN29kMzByd2loZGtmZ2lnIn0.vvRmXiXggPZ1CghxJXNVzQ"
                    />
                </MapContainer>
                <a href="https://www.google.com/maps/dir/?api=1&destination=-23.7642516,-46.6801928">
                    Ver rotas no Google Maps <RiSendPlaneFill />
                </a>
            </LeafletMap>

        <div className="divisor"></div>

        </Container>
    )
}

export default Local;