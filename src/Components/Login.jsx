import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
    import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/login');
    }
  }, [user]); 



  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      {/* Sign in with google button */}
      <div className='max-w-[240px] m-auto py-4' >
        <Button color='primary '><GoogleButton onClick={handleGoogleSignIn} /></Button>
      </div>
      <div className='text-2xl text-center'>
        <p>Or</p>
      </div>
    <div>
      {/* Login form content start */}
     <Container>
      <Row>
        <Col sm={{ size:6,offset:3}}>
          <Card inverse color='dark'>
            <CardHeader>
              Sign in with email and password 
            </CardHeader>

            <CardBody>
              {/* creating form */}
              <Form>

                {/* Name field */}
                <FormGroup>
                  <Label for='email'>Enter Email</Label>
                  <Input type='email' placeholder='Enter email address' id='email'/>
                </FormGroup>
                {/* Password field */}
                <FormGroup>
                  <Label for='password'>Enter password</Label>
                  <Input type='password' placeholder='Enter password' id='password'/>
                </FormGroup>

                <Container className='text-center'>

                <Button outline color='light'>Register</Button>
                <Button color='primary' outline type='reset' className='ml-5'>Reset</Button>
                </Container>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
     </Container>
     {/* Login form content end */}
    </div>  
    </div>
  );
};

export default Login;