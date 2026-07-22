"use client";

import { useActionState, useState, useEffect } from "react";
import NotePreview from "@/components/NotePreview";
// import Image from "next/image";
import { deleteNote, saveNote } from "../actions";
import SaveButton from "@/components/SaveButton";
import DeleteButton from "@/components/DeleteButton";

const initialState = {
  message: null,
};

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const [saveState, saveFormAction] = useActionState(saveNote, initialState);
  const [, delFormAction] = useActionState(deleteNote, initialState);

  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const isDraft = !noteId;

  useEffect(() => {
    if (saveState.errors) {
      // 处理错误
      console.log(saveState.errors);
    }
  }, [saveState]);

  return (
    <form className="note-editor" action={saveFormAction} autoComplete="off">
      <div className="note-editor-form">
        <div className="note-editor-menu" role="menubar">
          <input type="hidden" name="noteId" value={noteId || ""} />
          <SaveButton formAction={saveFormAction} />
          <DeleteButton isDraft={isDraft} formAction={delFormAction} />
        </div>
        <div className="note-editor-menu">
          {saveState?.message}
          {saveState.errors && saveState.errors[0].message}
        </div>
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          name="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          value={body}
          id="note-body-input"
          name="body"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </form>
  );
}
