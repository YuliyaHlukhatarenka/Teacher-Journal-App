import { IMark } from './mark';
export interface ISubject {
     name: string;
     teacher: string;
     cabinet: string;
     description: string;
     marks: IMark[];
     average: object;
     checked?: boolean;
     studentAndMarks?: object;
     _id: string;
}
