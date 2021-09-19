import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

interface IList {
  ID: number;
  Name: string;
  Email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const Home: React.FC = () => {
  const history = useHistory();

  const [users, setUsers] = useState<IList[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await api.get('/getAll');
    console.log(response);
    setUsers(response.data);
  }

  function newUser() {
    history.push('/create');
  }

  return (
    <div className='"container"'>
      <div className="page-header">
        <h1>Users</h1>
        <Button variant="danger" onClick={newUser}>
          New
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>
                <Button size="sm" color="primary">
                  Edit
                </Button>{' '}
                <Button size="sm" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
