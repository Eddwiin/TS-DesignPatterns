type TransformString<T extends string> = T extends `uppercase:${infer Rest}`
  ? Uppercase<Rest>
  : T extends `lowercase:${infer Rest}`
  ? Lowercase<Rest>
  : never;

  const transformString = <T extends string>(input: T): TransformString<T> => {
  if (input.startsWith('uppercase:')) {
    return input.substring(11).toUpperCase() as TransformString<T>;
  } else if (input.startsWith('lowercase:')) {
    return input.substring(11).toLowerCase() as TransformString<T>;
  } else {
    throw new Error(`Unsupported transformation: ${input}`);
  }
};

// Exemples d'utilisation
const uppercased = transformString('uppercase:hello');
const lowercased = transformString('lowercase:WORLD');

// DEUXIEME SOLUTION 
const CASING_OPTION = ['uppercase', 'lowercase'] as const;
type CASING_TYPE = typeof CASING_OPTION[keyof typeof CASING_OPTION]
type TransformStringWithArg<T extends string, K extends CASING_TYPE> = K extends `uppercase`
 ? Uppercase<T>
 : K extends 'lowercase'
 ? Lowercase<T>
 : never

 const transformString2 = <T extends string, K extends CASING_TYPE>(input: T, transformAction: K): TransformStringWithArg<T, K> => {
    if(transformAction === 'uppercase') {
        return input.toUpperCase()  as TransformStringWithArg<T, K>;
    } else if(transformAction === 'lowercase') {
        return input.toLowerCase() as TransformStringWithArg<T,K>;
    } else  {
        throw new Error("Error key")
    }
 }


 const test = transformString2('mavaleur', 'uppercase');