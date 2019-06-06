import { createSelector } from '@ngrx/store';
import { User } from '../../common/entities/users';
import { Subject } from '../../common/entities/subject';

export const initialState: AppState = {
    students: [],
    subjects: []
}

export interface AppState {
    students: User[];
    subjects: Subject[];

}
