import { IStudent } from '../../common/entities';

export const initialStudentsState: IStudentsState = {
    students: [],
};

export interface IStudentsState {
    students: IStudent[];
}
