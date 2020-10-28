import { Dispatch } from 'react';
import { db } from '../firebase/firebase-config';
import { iAction, iAppState, iNewNote } from '../misc/Interfaces';
import { iNote } from './../misc/Interfaces';
import { notesActions } from './../misc/Actions';
import loadNotes from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import fileUpload from './../helpers/fileUpload';

const { notesActive, notesLoad, notesUpdated, notesDelete, notesLogoutCleaning, notesAddNew } = notesActions

const MySwal = withReactContent(Swal);

export const startNewNote = () => {
  return async (dispatch: Dispatch<iAction<iNote>>, getState: () => iAppState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(addNewNote({ id: docRef.id, ...newNote }))
    dispatch(activeNote(docRef.id, newNote));
  }
}

export const activeNote = (id: string, note: iNewNote): iAction<iNote> => ({
  type: notesActive,
  payload: {
    id,
    ...note
  }
})

export const addNewNote = (note: iNote): iAction<iNote> => ({
  type: notesAddNew,
  payload: note
})

export const startLoadingNotes = (uid: string) => {
  return (dispatch: Dispatch<iAction<Array<iNote>>>) => {

    const notes = loadNotes(uid);
    notes.then(notes => {
      dispatch(setNotes(notes));
    })
  }
}

export const setNotes = (notes: Array<iNote>): iAction<Array<iNote>> => ({
  type: notesLoad,
  payload: notes
})

export const startSavenote = (note: iNote) => {
  return (dispatch: Dispatch<iAction<iNote>>, getState: () => iAppState) => {

    const { uid } = getState().auth;

    const { id, title, body, imageUrl, date } = note;

    const updatedNote: iNewNote = {
      title: title,
      body: body,
      date: date
    }

    if (imageUrl) {
      updatedNote.imageUrl = imageUrl;
    }

    db.doc(`/${uid}/journal/notes/${id}`).update(updatedNote).then(() => {
      dispatch(refreshNote(id, updatedNote));
      MySwal.fire('Saved', note.title, 'success');
    });

  }
}

export const refreshNote = (id: string, note: iNewNote): iAction<iNote> => ({
  type: notesUpdated,
  payload: {
    id, ...note
  }
})

export const startUploading = (file: File) => {
  return (dispatch: Dispatch<(dispatch: Dispatch<iAction<iNote>>, getState: () => iAppState) => void>, getState: () => iAppState) => {
    const { active } = getState().notes;
    MySwal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        MySwal.showLoading();
      }
    })

    fileUpload(file).then(url => {
      (active as iNote).imageUrl = url;
      dispatch(startSavenote(active as iNote))
      MySwal.close();
    })
  }
}

export const startDeleting = (id: string) => {
  return (dispatch: Dispatch<iAction<string>>, getState: () => iAppState) => {
    const { uid } = getState().auth;
    db.doc(`/${uid}/journal/notes/${id}`).delete().then(() => {
      dispatch(deleteNote(id));
    })
  }
}

export const deleteNote = (id: string): iAction<string> => ({
  type: notesDelete,
  payload: id
})

export const noteLogout = (): iAction<undefined> => ({
  type: notesLogoutCleaning,
})