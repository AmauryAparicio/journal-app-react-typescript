import { iAction, iAuthPayload, iAuthState } from "../misc/Interfaces";
import { authActions } from './../misc/Actions';

const initialState = {
  loggedIn: false
}

const authReducer = (state: iAuthState = initialState, action: iAction<iAuthPayload>): iAuthState => {

  const { login, logout } = authActions;

  switch (action.type) {
    case login:
      const { payload } = action;
      const { uid, displayName } = payload as iAuthPayload;
      return {
        uid: uid,
        name: displayName,
        loggedIn: true
      }
    case logout:
      return {
        loggedIn: false
      }
    default:
      return state;
  }
}

export default authReducer;