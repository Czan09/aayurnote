// const express = require(`express`);
const pool = require(`../utils/conn`);

const getAllNotesDb = async () => {
  try {
    const query = `
      SELECT note.id, note.title, note.content, users.username, tag.tag_name
      FROM note
       JOIN users ON note.user_id = users.id
       JOIN note_tag ON note.id = note_tag.note_id
       JOIN tag ON note_tag.tag_id = tag.id
    `;
    const { rows: notes } = await pool.query(query);
    return notes;
  } catch (error) {
    console.error("Error fetching all notes:", error);
    throw error;
  }
};

const getNoteByIdDb = async (id) => {
  const { rows: note } = await pool.query(
    `SELECT title,content FROM note WHERE id = ${id}`
  );
  return note;
};

const createNoteDb = async ({ title, content, users }) => {
  const { rows: note } = await pool.query(
    `
    INSERT INTO note(title,content,users) 
    VALUES ('${title}','${content}','${users}')
  returning title,content,user`
  );
  return note[0];
};

const updateNoteByID = async ({ id, title, content }) => {
  const { rows: note } = await pool.query(
    `UPDATE note SET title='${title}', content='${content}'}' WHERE id =${id}`
  );
  return note[0];
};

const updateNoteTagByID = async ({ id, tag }) => {
  const { rows: note } = await pool.query(
    `UPDATE note SET tag='${tag}'}' WHERE id =${id}`
  );
  return note[0];
};

const deleteNoteByID = async (id) => {
  const { rows: note } = await pool.query(
    `DELETE FROM note where id = $1 returning *`,
    [id]
  );
  return note[0];
};

module.exports = {
  getAllNotesDb,
  getNoteByIdDb,
  createNoteDb,
  updateNoteByID,
  updateNoteTagByID,
  deleteNoteByID,
};
