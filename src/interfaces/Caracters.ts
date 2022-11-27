export interface Caracter {
    gender: "Male" | "Female" | "Unknow" | "Genderless",
    image: string,
    name: string,
    species: "Human" | "Alien" | "Unknow" | "Humanoid",
    status: string
    location: {
        name: string,
        url: string
    }
}
