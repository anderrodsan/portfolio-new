import { Project } from "@/utils/types/types";

export const projects:Project[] = [
    {
      title: 'DormHive Tenants',
      text: 'An alternative to facebook tailored to student dormitories',
      image: '/images/projects/dormhive-tenants.png',
      date: '15 Jan 2024',
      link: 'https://dormhive-tenants.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Supabase', 'Github']
    },
    {
      title: 'DormHive Dashboard',
      text: 'Admin dashboard to manage the DormHive Tenants app',
      image: '/images/projects/dormhive-dash.png',
      date: '20 Dic 2023',
      link: 'https://dormhive-dashboard.vercel.app/dashboard',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Supabase', 'Github']
    },
    {
      title: 'WordTracker',
      text: 'Input any text and add words into the dictionary to track understanding',
      image: '/images/projects/wordwise-mockup.png',
      date: '30 Jan 2024',
      link: 'https://wordtracker.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Github']
    },
    {
      title: 'Plex Map',
      text: 'Interactive map to follow a youtubers trip around the world',
      image: '/images/projects/plex-mockup.png',
      date: '22 Jan 2024',
      link: 'https://plex-map.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Leaflet', 'Github']
    },
  ]