import { SubjectsActions } from '../actions';
import { ActionTypes } from '../constants';
import { initialSubjectsState } from '../state';
import { ISubjectsState } from '../state';
import { ISubject } from '../../common/entities';

export function subjectsReducer(
  state: ISubjectsState = initialSubjectsState,
  action: SubjectsActions
): ISubjectsState {
  switch (action.type) {
    case ActionTypes.UPDATE_SUBJECT_SUCCESS:
      return {
        subjects: [...state.subjects.filter(item => item._id !== (action.payload as ISubject)._id), action.payload as ISubject]
      };

    case ActionTypes.ADD_SUBJECT_SUCCESS:
      return {
        subjects: [...state.subjects, action.payload as ISubject]
      };

    case ActionTypes.GET_SUBJECTS_SUCCESS:
      return {
        subjects: action.payload as ISubject[]
      };

    default:
      return state;
  }
}
