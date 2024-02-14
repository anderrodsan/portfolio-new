"use client"

import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Mail, Palette } from 'lucide-react'
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/framer-motion/AnimatedTitle'
import AnimatedText from '@/components/framer-motion/AnimatedText'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'


const Contact: React.FC = () => {


  return (
    <div className='snap-start flex flex-col items-center py-10 gap-5 w-full h-full gradient2 px-5 border-b' id='contact'>
      <AnimatedTitle className='title flex-between gap-2'>
        <Mail size={30} strokeWidth={2.5}/>
        <p>Contact</p>
      </AnimatedTitle>
      <AnimatedText className='flex-1 flex-col-center gap-3 w-full'>
        <p className='text-sm md:text-base'>Contact me via</p>
        <div className='flex-center -mt-2'>
            <Link href={'https://github.com/anderrodsan'} target='_blank'>
                <Button variant={'ghost'} className='flex-start gap-2 group'>
                    <FaGithub className='h-6 w-6 opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out'/>
                    <p>Github</p>
                </Button>
                
            </Link>
            <Link href={'https://www.linkedin.com/in/anderrodsan/'} target='_blank'>
                <Button variant={'ghost'} className='flex-start gap-2 group'>
                    <FaLinkedin className='h-6 w-6 opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-in-out'/>
                    <p>LinkedIn</p>
                </Button>
                
            </Link>  
        </div>
        <Separator className='w-full sm:w-2/3 lg:w-1/2'/>
        <p className='text-sm md:text-base'>Or write me a message</p>  
        <div className='flex-1 flex flex-col gap-3 h-full w-full sm:w-2/3 lg:w-1/2'>
            <Label>Email</Label>
            <Input placeholder='email' className='pb-3'/>
            <Label>Content</Label>
            <Textarea placeholder='write me a message' className='flex-1'/>
        </div>
      </AnimatedText>
      
    </div>
        
  )
}

export default Contact
