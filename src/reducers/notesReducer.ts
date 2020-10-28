import { iAction, iNote, iNotesState } from "../misc/Interfaces";
import { notesActions } from './../misc/Actions';

const initialState = {
  notes: [],
  active: null
}

const { notesActive, notesLoad, notesUpdated, notesDelete, notesAddNew, notesLogoutCleaning } = notesActions

const notesReducer = (state: iNotesState = initialState, action: iAction<iNote | Array<iNote> | string>): iNotesState => {
  const { type, payload } = action
  const { notes } = state;
  switch (type) {
    case notesActive:
      return {
        ...state,
        active: {
          ...(payload as iNote)
        }
      }
    case notesLoad:
      return {
        ...state,
        notes: [...(action.payload as Array<iNote>)]
      }
    case notesUpdated:
      return {
        ...state,
        notes: (notes as Array<iNote>).map(note => note.id === (payload as iNote).id ? (payload as iNote) : note)
      }
    case notesDelete:
      return {
        ...state,
        active: null,
        notes: (notes as Array<iNote>).filter(note => note.id !== (payload as string))
      }
    case notesAddNew:
      return {
        ...state,
        notes: [(payload as iNote), ...(notes)]
      }
    case notesLogoutCleaning:
      return initialState;
    default:
      return state;
  }
}

export default notesReducer;