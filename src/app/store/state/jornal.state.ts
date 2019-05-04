import { createSelector } from '@ngrx/store';
import { User } from '../../common/entities/users';
import { Subject } from '../../common/entities/subject';

export const initialState: AppState = {
    students: [
        {
            "_id": "5ca611e73da50b4d4e094782",
            "firstName": "Hudson",
            "lastName": "Griffith",
            "address": "573 Lake Street, Finzel, Hawaii, 3796",
            "description": "Description for student Hudson"
        }
    ],
    subjects: []
}

export interface AppState {
    students: User[];
    subjects: Subject[];

}
