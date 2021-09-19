import React, { useState, ChangeEvent } from 'react';
import api from '../services/api';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import { useHistory } from 'react-router-dom';

interface IUser {
  Name: string;
  Email: string;
}

const NewUser: React.FC = () => {
  const history = useHistory();

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

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await api.post('/create', model);
    console.log(response);
  }

  function back() {
    history.goBack();
  }

  return (
    <div className='"container"'>
      <div className="page-header">
        <h1>New User</h1>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewUser;
