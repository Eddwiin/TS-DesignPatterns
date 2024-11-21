interface ExampleForm {
    firstName: string;
    lastName: string;
    contact: {
        email: string;
        phone: number;
    }
}

type Path<T> = T extends object
    ? { [key in keyof T]: [key] | [key, ...Path<T[key]>]}[keyof T]
    : never


type ExtractExampleForm =  Path<ExampleForm> 