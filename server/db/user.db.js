// const express = require(`express`);
const pool = require(`../utils/conn`);

const getAllUsersDb = async () => {
  const { rows: users } = await pool.query(`SELECT * from users `);
  return users;
};
const getUserByIdDb = async (id) => {
  const { rows: users } = await pool.query(
    `SELECT * FROM users WHERE id = ${id}`
  );
  return users;
};

const getDetailbyId = async (id) => {
  // console.log("db " + id);
  const { rows: users } = await pool.query(
    `SELECT  username,email,role FROM users WHERE id = ${id}`
  );
  return users;
};

const createUserDb = async ({ username, email, password }) => {
  const { rows: users } = await pool.query(
    `
    INSERT INTO users(username,email,password) 
    VALUES ('${username}','${email}','${password}')
  returning username,email,password`
  );
  return users[0];
};

const updateUserByID = async ({ id, username, email }) => {
  const { rows: users } = await pool.query(
    `UPDATE users SET username='${username}',email='${email}' WHERE id =${id}`
  );
  return users[0];
};

const changeUserPasswordDB = async ({ id, password }) => {
  console.log(id, password);
  return await pool.query(
    `UPDATE users set password ='${password}' where id=${id}`
  );
};

const deleteUserByID = async (id) => {
  const { rows: users } = await pool.query(
    `DELETE FROM users where id = $1 returning *`,
    [id]
  );
  return users[0];
};

module.exports = {
  getAllUsersDb,
  getUserByIdDb,
  getDetailbyId,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
};
