"use client"

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { Project } from '@/utils/types/types'

type Props = {
  project: Project,
  delay: number,
}

const ProjectCard: React.FC<Props> = ({project, delay}) => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
    >
      <Card className='p-5 bg-slate-50 dark:bg-slate-950'>
        <div className=''>
          <Link href={project.link} target="_blank">
            <div className='relative w-full h-[200px] mb-5 overflow-hidden'>
              <Image
                alt='Video Image' 
                src={project.image}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  borderRadius: '6px',
                  transition: 'transform 0.3s ease-in-out'
                }}
                className="hover:scale-110 cursor-pointer"
              />
            </div>
            
          </Link>
          
          <p className='text-slate-500 font-bold text-sm'>{project.date}</p>
          <p className='font-bold text-lg'>{project.title}</p>
          <p className='text-sm'>{project.text}</p>
          <div className='flex-start gap-2 flex-wrap pt-3'>
            {project.badges.map((badge, index) => (
              <div key={index}>
                <Badge>{badge}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>   
  )
}

export default ProjectCard
