import { uiActions } from "../misc/Actions";
import { iAction, iUiPayload, iUiState } from './../misc/Interfaces';

const initialState = {
  loading: false,
  msgError: null
}

const {uiRmError, uiSetError, uiFinishLoading, uiStartLoading} = uiActions;

const uiReducer = (state: iUiState = initialState, action: iAction<iUiPayload>): iUiState => {
  switch (action.type) {
    case uiSetError:
      return {
        ...state,
        msgError: action.payload
      }
    case uiRmError:
      return {
        ...state,
        msgError: action.payload
      }
    case uiStartLoading:
      return {
        ...state,
        loading: true,
      }
    case uiFinishLoading:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}

export default uiReducer;