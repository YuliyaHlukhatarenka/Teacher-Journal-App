
export class User {
    public firstName: string;
    public lastName: string;
    public address: string;
    public description: string;
    public _id: string;

    constructor(firstName: string, lastName: string, address: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.description = description;
    }}
