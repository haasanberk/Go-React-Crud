import React, { useState, ChangeEvent, useEffect } from 'react';
import api from '../services/api';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

interface IUser {
  Name: string;
  Email: string;
}

const DeleteUser: React.FC = () => {
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

    await api.delete(`/${id}`);

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
        <h1>Delete User</h1>

        <Button variant="dark" onClick={back}>
          Back
        </Button>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            readOnly
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
            readOnly
            type="text"
            name="Email"
            value={model.Email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Form>
    </div>
  );
};

export default DeleteUser;
