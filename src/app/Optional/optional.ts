
type Params = { id: string } & (
  {gender: 'Male' | 'Female', salary: number} | 
  { race: 'Dog' | 'Cat', age: number}
)
