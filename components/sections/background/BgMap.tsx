"use client"

import { Experience } from '@/utils/types/types'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerItem from './Marker';
import 'leaflet/dist/leaflet.css';
import { experience } from '@/data/experience';



const BgMap:React.FC = () => {

    if (typeof window !== "undefined") { // Avoid the window is not defined error on production

        const data = experience;

        return (
            <MapContainer
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                }}
                center={[47.914863729533465, 6.006843811376136]}
                zoom={4}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {data.map((item: Experience, index: number) => (
                    <div key={index}>
                        <MarkerItem item={item} />
                    </div>
                ))}
            </MapContainer>
        )
    } else return null;
}

export default BgMap