import { Mark } from './mark';
export class Subject {
    public name: string;
    public teacher: string;
    public cabinet: string;
    public description: string;
    public marks: Mark[];
    public average: object;
    public _id: string;

    constructor(name: string, teacher: string, cabinet: string, description: string) {
        this.name = name;
        this.teacher = teacher;
        this.cabinet = cabinet;
        this.description = description;
        this.marks = [];
        this.average = {};
    }
  
}
