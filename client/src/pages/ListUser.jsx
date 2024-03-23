import { useState, useEffect } from "react";
import axios from "axios";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/user");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete("/api/user/" + id);
    fetchData();
  };

  return (
    <div>
      <h1>List Users</h1>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
