export interface CVProps {
  data: {
    name: string;
    lastName: string;
    age: string;
    city: string;
    email: string;
    phone: string;
    image: string;
    gitHub: string;
    linkedin: string;
    aboutMe: string[];
  };

  education: {
    name: string;
    date: string;
    where: string;
  }[];

  experience: {
    name: string;
    date: string;
    where: string;
    descripcion: string[];
  }[];

  abilities: string[];
}
