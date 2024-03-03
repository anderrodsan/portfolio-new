

export type Experience = {
    type: boolean,
    title: string,
    text: string,
    company: string,
    city: string,
    location: number[],
    link: string,
    clink: string,
    logo: string,
    date: string,
}

export type Project = {
    title: string;
    text: string;
    darkimg: string;
    lightimg: string;
    date: string;
    link: string;
    badges: string[];
  }