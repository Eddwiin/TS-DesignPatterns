
type Params = { id: string } & (
  {gender: 'Male' | 'Female', salary: number} |
  { race: 'Dog' | 'Cat', age: number}
)



const typedObjectKeys = <TObj extends {}>(
  obj: TObj
): Array<keyof TObj> => {
  return Object.values(obj) as Array<keyof TObj>;
}

const result = typedObjectKeys({
  name: 'John',
  age: 30
});

console.log(result)


interface Person {
  name: string;
  age: number;
  address: string;
}

interface Employee {
  salary: number;
  companyName: string;
}

type Getter<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

type Solution = Getter<Person>;


interface People {
  subscribed_james: Person;
  subscribed_kate: Person;
  subscribed_todd: Person;
  subscribed_tom: Person;
  chris: Person;
  timmy: Person;
}

type OnlySubscribed<Type> = {
  [Property in keyof Type as Property extends `subscribed${infer _}` ? Property : never]: Type[Property]
}

type CoolPeople = OnlySubscribed<People>;
