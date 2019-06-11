export class User {
    public firstName: string;
    public lastName: string;
    public address: string;
    public description: string;

    constructor(firstName: string, lastName: string, address: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.description = description;
    }
}
