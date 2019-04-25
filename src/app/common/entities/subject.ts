const uuidv1 = require('uuid/v1');

class Subject {
    public name: string;
    public teacher: string;
    public cabiner: string;
    public description: string;

    // private id: string = uuidv1();


    constructor(name: string, teacher: string, cabiner: string, description: string) {
        this.name = name;
        this.teacher = teacher;
        this.cabiner = cabiner;
        this.description = description;
    }
}

export default Subject;
