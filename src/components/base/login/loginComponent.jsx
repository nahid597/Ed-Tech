import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginComponent = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // perform login logic here
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all fields.');
    } else {
      localStorage.setItem('loggedIn', true);
      setErrorMessage('');

      toast.success('Successfully Login !', {
        position: toast.POSITION.TOP_RIGHT
    });
    
      navigate('/home', {
        replace: true
      });

    }
  };

  return (
    <div className="container">
        <h2>Login</h2>
        <div className='card'>
        <Form className='p-3' onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormGroup>
        {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
        <Button type="submit" color="primary">
          Login
        </Button>
      </Form>
        </div>
    </div>
  );
};

export default LoginComponent;
