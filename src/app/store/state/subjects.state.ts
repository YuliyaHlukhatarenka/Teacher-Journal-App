import { ISubject } from '../../common/entities';

export const initialSubjectsState: ISubjectsState = {
    subjects: [],
};

export interface ISubjectsState {
    subjects: ISubject[];
}
