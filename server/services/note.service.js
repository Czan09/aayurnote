const {
  getAllNotesDb,
  getNoteByIdDb,
  createNoteDb,
  updateNoteByID,
  updateNoteTagByID,
  deleteNoteByID,
} = require("../db/note.db");

// Get all notes
const getAllNotes = async () => {
  try {
    console.log("reached service");
    const notes = await getAllNotesDb();
    return notes;
  } catch (error) {
    throw new Error("Error fetching notes:", error);
  }
};

// Get note by ID
const getNoteById = async (id) => {
  try {
    const note = await getNoteByIdDb(id);
    if (note.length === 0) {
      throw new Error("Note not found");
    }
    return note[0];
  } catch (error) {
    throw new Error("Error fetching note by ID:", error);
  }
};

// Create a new note
const createNote = async ({ title, content, users }) => {
  try {
    const newNote = await createNoteDb({ title, content, users });
    return newNote;
  } catch (error) {
    throw new Error("Error creating note:", error);
  }
};

// Update note by ID
const updateNote = async (id, { title, content }) => {
  try {
    const updatedNote = await updateNoteByID({ id, title, content });
    return updatedNote;
  } catch (error) {
    throw new Error("Error updating note:", error);
  }
};

// Update note tag by ID
const updateNoteTag = async (id, { tag }) => {
  try {
    const updatedNote = await updateNoteTagByID({ id, tag });
    return updatedNote;
  } catch (error) {
    throw new Error("Error updating note tag:", error);
  }
};

// Delete note by ID
const deleteNote = async (id) => {
  try {
    const deletedNote = await deleteNoteByID(id);
    return deletedNote;
  } catch (error) {
    throw new Error("Error deleting note:", error);
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  updateNoteTag,
  deleteNote,
};
