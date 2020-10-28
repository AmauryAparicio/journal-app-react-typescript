
import { Dispatch } from 'react';
import { iAction, iUiPayload } from '../misc/Interfaces';
import { authActions } from './../misc/Actions';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { User } from 'firebase';
import { iAuthPayload } from './../misc/Interfaces';
import { finishLoading, startLoading } from './ui';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';

const mySwal = withReactContent(Swal);

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: Dispatch<iAction<iAuthPayload | iUiPayload>>) => {

    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password).then(({ user }) => {

      const { uid, displayName } = user as User;

      dispatch(
        login(uid, (displayName as string))
      );

      dispatch(finishLoading());
    }).catch(err => {
      dispatch(finishLoading());
      mySwal.fire('Error', err.message, 'error');
    })
  }
}

export const startRegister = (email: string, password: string, name: string) => {
  return (dispatch: Dispatch<iAction<iAuthPayload | iUiPayload>>) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
      dispatch(startLoading());

      await (user as User).updateProfile({
        displayName: name,
      });

      const { uid, displayName } = user as User;

      dispatch(
        login(uid, (displayName as string))
      )

      dispatch(finishLoading());
    }).catch(err => {
      dispatch(finishLoading());
      mySwal.fire('Error', err.message, 'error');
    })
  }
}

export const startGoogleLogin = () => {
  return (dispatch: Dispatch<iAction<iAuthPayload>>) => (
    firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => {
      const { uid, displayName } = user as User;
      dispatch(
        login(uid, (displayName as string))
      )
    })
  )
}

export const login = (uid: string, displayName: string): iAction<iAuthPayload> => ({ type: authActions.login, payload: { uid, displayName, loggedIn: true } })

export const startLogout = () => {
  return async (dispatch: Dispatch<iAction<iAuthPayload | undefined>>) => {

    await firebase.auth().signOut().then(() => {
      dispatch(logout());
      dispatch(noteLogout());
    })
  }
}

export const logout = (): iAction<iAuthPayload> => ({
  type: authActions.logout,
})