//const uuidv1 = require('uuid/v1');

export class Subject {
    public name: string;
    public teacher: string;
    public cabinet: string;
    public description: string;
    public marks: object[];
    public average: object;

    constructor(name: string, teacher: string, cabinet: string, description: string) {
        this.name = name;
        this.teacher = teacher;
        this.cabinet = cabinet;
        this.description = description;
    }
  
    // private id: string = uuidv1();

}
