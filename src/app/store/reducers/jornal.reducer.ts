import { ActionTypes, AppActions } from '../actions/jornal.actions';
import { initialState } from '../state'


export function jornalReducer(state = initialState, action: AppActions) {

  switch (action.type) {
    case ActionTypes.INIT_STORE:
      return action.payload;

    case ActionTypes.UPDATE_STORE:
      state.subjects = [...state.subjects.filter(item => item._id !== action.itemToUpdate), action.payload];
      return state;

    case ActionTypes.ADD_TO_STORE:
      if (action.itemToAdd === 'students') {
        state.students = [...state.students, action.payload];
      } else {
        state.subjects = [...state.subjects, action.payload];
      }
      return state;

    case ActionTypes.GET_STUDENTS:
      return state;

    case ActionTypes.GET_STUDENTS_SUCCESS:
      state.students = action.payload;
      return state

    case ActionTypes.GET_STUDENTS_ERROR:
      return action.payload;

      case ActionTypes.GET_SUBJECTS:
      return state;

    case ActionTypes.GET_SUBJECTS_SUCCESS:
      state.subjects = action.payload;
      return state

    case ActionTypes.GET_SUBJECTS_ERROR:
      return action.payload;

    default:
      return state;
  }
}