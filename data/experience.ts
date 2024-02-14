import { Experience } from "@/utils/types/types";

// false means education, true job
export const experience: Experience[] = [
    {
        type: false,
        title: 'Mcs Innovative Communication Technologies and Entrepreneurship',
        text: '',
        company: 'Aalborg University Copenhagen',
        city: 'Copenhagen, Denmark',
        location: [55.65083754949108, 12.541895547761852],
        link: 'https://www.en.aau.dk/education/master/innovative-communication-technologies-entrepreneurship',
        clink: 'https://www.en.aau.dk/education',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/AAU_logo_2012.png',
        date: '2021 - 2023',
    },
    {
        type: true,
        title: 'R&D Automatic External Defibrillators',
        text: '',
        company: 'Bexen Cardio',
        city: 'Ermua, Spain',
        location: [43.18538305927058, -2.5095859813182986],
        link: 'https://www.bexencardio.com/',
        clink: 'https://www.bexencardio.com/',
        logo: 'https://media.licdn.com/dms/image/D4D0BAQHwAXlqrWlDAQ/company-logo_200_200/0/1704975454925/bexen_cardio_logo?e=2147483647&v=beta&t=Fai3-LurSXU_upMcUXelzfYs-RhfC6m-CYwKia6GOgo',
        date: '2020 - 2021',
    },
    {
        type: false,
        title: 'Bcs Industrial Electronics Engineering',
        text: '',
        company: 'Mondragon University',
        city: 'Mondragón, Spain',
        location: [43.06310488840172, -2.505618225090252],
        link: 'https://www.mondragon.edu/en/bachelor-degree-industrial-electronics-engineering',
        clink: 'https://www.mondragon.edu/en',
        logo: 'https://www.addimat.es/gestor/recursos/uploads/imagenes/empresas/logos/asociados/mu.svg',
        date: '2017 - 2021',
    },
]