import { Project } from "@/utils/types/types";

export const projects:Project[] = [
    {
      title: 'DormHive Tenants',
      text: 'An alternative solution to facebook tailored to tenants living in dormitories',
      darkimg: '/images/projects/dormhive-tenant-dark.png',
      lightimg: '/images/projects/dormhive-tenant-light.png',
      date: '15 Jan 2024',
      link: 'https://dormhive-tenants.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Supabase', 'Github']
    },
    {
      title: 'DormHive Dashboard',
      text: 'Admin dashboard that enables setting up the tensnts app and comunicate with the tenants',
      darkimg: '/images/projects/dormhive-dash-dark.png',
      lightimg: '/images/projects/dormhive-dash-light.png',
      date: '20 Dic 2023',
      link: 'https://dormhive-dashboard.vercel.app/dashboard',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Supabase', 'Github']
    },
    {
      title: 'WordTracker',
      text: 'Input any text and add words into the dictionary to track understanding',
      darkimg: '/images/projects/wordwise-dark.png',
      lightimg: '/images/projects/wordwise-light.png',
      date: '30 Jan 2024',
      link: 'https://wordtracker.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Github']
    },
    {
      title: 'Plex Map',
      text: 'Interactive map to follow a youtubers trip around the world',
      darkimg: '/images/projects/plex-mockup.png',
      lightimg: '/images/projects/plex-mockup.png',
      date: '22 Jan 2024',
      link: 'https://plex-map.vercel.app/',
      badges: ['NextJS', 'Typescript', 'TailwindCSS', 'ShadCN UI', 'Leaflet', 'Github']
    },
  ]