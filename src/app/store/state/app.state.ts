
import { ISubjectsState, IStudentsState } from '../state';

export const initialAppState: IAppState = {
    studentsState: null,
    subjectsState: null
};

export interface IAppState {
    studentsState: IStudentsState;
    subjectsState: ISubjectsState;
}
