// const express = require(`express`);
const pool = require(`../utils/conn`);

const getAllNotesDb = async () => {
  console.log("reached db");
  const { rows: note } = await pool.query(`SELECT * from note`);
  return note;
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
