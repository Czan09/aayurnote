// const express = require(`express`);
const pool = require(`../utils/conn`);

const getAllTagsDb = async () => {
  const { rows: tags } = await pool.query(`SELECT * from tags `);
  return tags;
};
const getTagByIdDb = async (id) => {
  const { rows: tags } = await pool.query(
    `SELECT * FROM tags WHERE id = ${id}`
  );
  return tags;
};

const getTagByUserIdDb = async (id) => {
  const { rows: tags } = await pool.query(
    `SELECT * FROM tags WHERE users = ${id}`
  );
  return tags;
};

const createTagDb = async ({ tag_name, users }) => {
  const { rows: tags } = await pool.query(
    `
    INSERT INTO tags(tag_name,users) 
    VALUES ('${tag_name}',${users})
  returning tag_name`
  );
  return tags[0];
};

const updateTagByID = async ({ id, tag_name }) => {
  const { rows: tags } = await pool.query(
    `UPDATE tags SET tag_name='${tag_name}' WHERE id =${id}`
  );
  return tags[0];
};

const deleteTagByID = async (id) => {
  const { rows: tags } = await pool.query(
    `DELETE FROM tags where id = $1 returning *`,
    [id]
  );
  return tags[0];
};

module.exports = {
  getAllTagsDb,
  getTagByIdDb,
  getTagByUserIdDb,
  createTagDb,
  updateTagByID,
  deleteTagByID,
};
