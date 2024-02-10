
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