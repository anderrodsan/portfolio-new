"use client"

import AnimatedText from '@/components/framer-motion/AnimatedText'
import AnimatedTitle from '@/components/framer-motion/AnimatedTitle'
import { GraduationCap } from 'lucide-react'
import React from 'react'
import BgCard from './BgCard'
import { Experience } from '@/utils/types/types'
import BgMap from './BgMap'
import { experience } from '@/data/projects'

const Map: React.FC = () => {
  
    return (
        <div className='flex flex-col items-center py-10 gap-5 w-full h-full gradient1 px-5 lg:px-20' id='bg'>
            <AnimatedTitle className='title flex-between gap-2'>
                <GraduationCap size={30} strokeWidth={2.5}/>
                <p>Map</p>
            </AnimatedTitle>
            <AnimatedText className='text-center text-sm pb-5 -mx-10'>A list of my education and working experience</AnimatedText>
            
            <div className='h-full w-full mx-10 overflow-hidden rounded-md'>
                <BgMap/>
            </div>
           
        </div>
  )
}

export default Map