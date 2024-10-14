type NotEmptyString<T extends string> = T extends '' ? never : T;

function getNumberLetterOfName<T extends string>(myName: NotEmptyString<T>) {
    if (myName.length === 0) {
        throw new Error("Name can't be empty");
    }

    //...
}

getNumberLetterOfName('')