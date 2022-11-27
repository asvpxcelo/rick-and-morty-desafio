export interface Caracter {
    gender: "Male" | "Female" | "Unknow" | "Genderless",
    image: string,
    name: string,
    species:  string,
    status: string
    location: {
        name: string,
        url: string
    }
    origin: {
        name: string,
        url: string
    }
}
