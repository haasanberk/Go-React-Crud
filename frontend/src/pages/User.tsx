import React, { useState, ChangeEvent, useEffect } from 'react';
import api from '../services/api';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

interface IUser {
  Name: string;
  Email: string;
}

const User: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [model, setModel] = useState<IUser>({
    Name: '',
    Email: '',
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    if (id !== undefined) {
      findUser(id);
    }
  }, [id]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      await api.put(`/update/${id}`, model);
    } else {
      await api.post('/create', model);
    }
    back();
  }

  async function findUser(id: string) {
    const response = await api.get(`/get/${id}`);
    console.log(response.data);

    setModel({
      Name: response.data.Name,
      Email: response.data.Email,
    });
  }

  function back() {
    history.goBack();
  }

  return (
    <div className='"container"'>
      <div className="page-header">
        {id === undefined ? <h1>New User</h1> : null}
        {id !== undefined ? <h1>Edit User</h1> : null}

        <Button variant="dark" onClick={back}>
          Back
        </Button>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={model.Name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="Email"
            value={model.Email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            placeholder="Enter email"
          />
        </Form.Group>

        {id === undefined ? (
          <Button variant="success" type="submit">
            Create
          </Button>
        ) : null}
        {id !== undefined ? (
          <Button variant="primary" type="submit">
            Save
          </Button>
        ) : null}
      </Form>
    </div>
  );
};

export default User;
