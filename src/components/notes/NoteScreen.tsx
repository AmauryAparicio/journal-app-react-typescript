import React, { FunctionComponent, useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useDispatch, useSelector } from "react-redux";
import { iAppState, iNote, iNotesState } from "./../../misc/Interfaces";
import useForm from "./../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

const NoteScreen: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { active } = useSelector<iAppState>(
    ({ notes }) => notes
  ) as iNotesState;
  const { imageUrl, id } = active as iNote;
  const [formValues, handleInputchange, reset] = useForm(active as iNote);
  const { title, body } = formValues;

  const activeId = useRef(id);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  useEffect(() => {
    if (id !== activeId.current) {
      reset(active as iNote);
      activeId.current = id;
    }
  }, [activeId, active, reset, id]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content ">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputchange}
        />
        <textarea
          name="body"
          placeholder="What happened today?"
          className="notes__textarea"
          value={body}
          onChange={handleInputchange}
        ></textarea>
        {imageUrl && (
          <div className="notes__image">
            <img src={imageUrl} alt={title} />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
