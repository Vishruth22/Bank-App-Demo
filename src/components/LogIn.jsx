import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useState } from 'react';

export default function LogIn() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    
    <div className="modal show"
    style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
      <Form className='container my-5' style={{width: '500px'}}>
        <Modal.Header >
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setemail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleLogin}>
            Submit
            </Button>
            </Modal.Footer>
            
    </Form> 
    </Modal.Dialog>
      
      
    </div>
  )
}
{/* <Form className='container my-5' style={{width: '500px'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setemail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={handleLogin}>
            Submit
            </Button>
    </Form>  */}