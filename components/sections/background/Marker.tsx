"use client"

import { Badge } from '@/components/ui/badge'
import { Experience } from '@/utils/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { MapPin } from 'lucide-react'

type Props = {
    item: Experience,
}

const MarkerItem:React.FC<Props> = ({item}) => {

    const Icon = L.icon({
        iconUrl: '/pin2.png',
        iconSize: [40, 40],
        iconAnchor: [20, 30], // Adjust the anchor point
        className: 'leaflet-marker-icon', // Add className to remove unwanted styling
    });

    return (
        <div>
            <Marker 
                position={[item.location[0], item.location[1]]} 
                icon={Icon}
            >
                <Popup className='w-[300px] lg:w-[500px]'>
                    <div className='w-[250px] lg:w-[500px] flex-col-center lg:flex-start gap-5'>
                        <div className='space-y-2 w-full'>
                            <div className='font-bold text-lg'>{item.title}</div>
                            <div>{item.company}</div>
                            <Badge variant={'secondary'}>{item.city}</Badge>
                        </div>
                    </div>

                    
                </Popup>
            </Marker>
        </div>
    )
}

export default MarkerItem