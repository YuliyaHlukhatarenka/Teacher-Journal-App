import { StudentsActions } from '../actions';
import { ActionTypes } from '../constants';
import { initialStudentsState } from '../state';
import { IStudentsState } from '../state';
import { IStudent } from '../../common/entities';

export function studentsReducer(state: IStudentsState = initialStudentsState, action: StudentsActions): IStudentsState {
  switch (action.type) {
    case ActionTypes.ADD_STUDENT:
      return state;

    case ActionTypes.ADD_STUDENT_SUCCESS:
      return {
        students: [...state.students, action.payload as IStudent]
      };

    case ActionTypes.GET_STUDENTS_SUCCESS:
      return {
        students: action.payload as IStudent[]
      };

    default:
      return state;
  }
}
