const uuidv1 = require('uuid/v1');

class User {
    public firstName: string;
    public lastName: string;
    public address: string;
    public description: string;
    private id: string;

    constructor(firstName: string, lastName: string, address: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.description = description;
        this.id = uuidv1();
    }
}

export default User;
