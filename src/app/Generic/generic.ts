const person = {
    firstName: 'Marc',
    lastName: 'Bill',
    email: 'marc.bill@test.com',
    age: 30
} as const

const arr = ["Bill", "Marc", "Eric"] as const

type T1 = (typeof arr)[number]
type T2 = (typeof person)["firstName"]
const rename: T1 = 'Bill';



type ParseInt<T extends string> = T extends `${infer Int extends number}` ? Int : never;
type typeResult = ParseInt<"123">
type typeResult2 = ParseInt<"abc">

type ParsePerson<T extends keyof typeof person> = T extends `${infer Property extends keyof typeof person}` ? Property : never;
type typeResultObj = ParsePerson<"firstName">

declare function useStatuses<const T extends string>(statuses: T[]): T;
const loadingStatus = useStatuses(["loading", "idle"]);




type CreateApiMethod = <
    TInput extends Record<string, string>,
    TOutput
>(opts: {
    url: string;
    method: "GET" | "POST"
}) => (input: TInput) => Promise<TOutput>;

declare const createApiMethod: CreateApiMethod;

const getUser = createApiMethod<
    { id: string },
    { name: string }
>({
    url: '/user',
    method: 'GET'
})

getUser({ id: "123" })




interface UnionBuilder<T = never> {
    add: <NewValue>() => UnionBuilder<T | NewValue>;
    value: T
}

declare const u: UnionBuilder;

const result = u.add<string>().add<boolean>().add<number>().value;



function greet() { return 'Hello greet '};
type T3 = ReturnType<typeof greet>


export class GenericClass<SELF extends GenericClass<SELF>> {
    add() {
        return this;
    }
}

const genericClass = new GenericClass();
genericClass.add().add().add()


const lightColor = ["red", "yellow", "green"] as const;

function createStreetLight<C extends string>(colors: C[], defaultColor?: NoInfer<C>) { }

createStreetLight([...lightColor], "blue"); // Error, "blue" is not allows
