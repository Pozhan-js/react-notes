import SidebarNoteListFilter from "@/components/SidebarNoteListFilter";
import { sleep } from "@/lib/utils";
import { getAllNotes } from "@/lib/redis";

export default async function NoteList() {
  //   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  //   await sleep(10000);
  await sleep(3000);
  const notes = await getAllNotes();

  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">{"No notes created yet!"}</div>;
  }

  return <SidebarNoteListFilter notes={notes} />;
}
