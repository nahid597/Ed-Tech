import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupComponent = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform signup logic here
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Please fill in all fields.");
    } else {
      localStorage.setItem("loggedIn", true);
      setErrorMessage("");

      toast.success('Signup Successfully !!', {
        position: toast.POSITION.TOP_RIGHT
    });

      navigate("/home", {
        replace: true,
      });
    }
  };

  return (
    <div className="container">
      <h3>Create Your new Account</h3>
      <div className="card">
        <Form className="p-3" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormGroup>
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
          {errorMessage && (
            <div className="text-danger mb-3">{errorMessage}</div>
          )}
          <Button type="submit" color="primary">
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupComponent;
