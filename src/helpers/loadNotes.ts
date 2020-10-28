import { db } from "../firebase/firebase-config";
import { iNewNote, iNote } from "../misc/Interfaces";

const loadNotes = async (uid: string) => {
  const notes: Array<iNote> = [];
  await db.collection(`${uid}/journal/notes`).get().then(notesSnap => {
    notesSnap.forEach(snap => {
      notes.push({
        id: snap.id,
        ...(snap.data() as iNewNote)
      })
    })
  })
  return notes;
}

export default loadNotes;