export class Person {
    username = '';
    password = '';
    name = '';
    email = '';
    age = 0;
}


export class PersonBuilder {
    protected person = new Person();

    static get build() {
        return new Builder();
    }
}

export class PersonInfoBuilder<SELF extends PersonInfoBuilder<SELF>> extends PersonBuilder {
    setUsername(username: string) {
        this.person.username = username;
        return this;
    }

    setPassword(password: string) {
        this.person.password = password;
        return this;
    }
}

export class PersonWithNameAndEmail<SELF extends PersonWithNameAndEmail<SELF>> extends PersonInfoBuilder<PersonWithNameAndEmail<SELF>> {
    setName(name: string) {
        this.person.name = name;
        return this;
    }

    setEmail(email: string) {
        this.person.email = email;
        return this;
    }
}

export class PersonWithAge<SELF extends PersonWithAge<SELF>> extends PersonWithNameAndEmail<PersonWithAge<SELF>> {
    setAge(age: number) {
        this.person.age = age;
        return this;
    }
}


export class Builder extends PersonWithAge<Builder> {

}