import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { signUp } from '../Services/user-service';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
const Signup = () => {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        about:'',
    })

    const [error, setError] = useState({
        error:{},
        isError: false
    })

    

    // handle change
    const handleChange=(event, property) => {
        
        setData({...data, [property]: event.target.value})

    }

    const clearData = () => {
        setData({
        name:'',
        email:'',
        password:'',
        about:'',

        })
    }

    const submitData = (event) => {
        event.preventDefault()

        console.log(data)
        // data validate


        //call server api for sending data

        signUp(data).then((resp)=>{
            console.log(resp)
            console.log("success sign in")
        }).catch((error)=>{
            console.log(error)
            console.log("Error");;
        })
    }
    return (
        <div className='bg-slate-100 '>
            <Container className=''>
                <Row>
                    {/* { JSON.stringify(data) } */}

                    <Col sm={{ size: 6, offset: 3 }} >
                        <Card inverse color='dark'>

                            <CardHeader>

                                Fill info to register


                            </CardHeader>

                            <CardBody>

                                {/* creating form */}
                                <Form onSubmit={submitData}>
                                    {/* Name field */}
                                    <FormGroup>
                                        <Label for='name'>Enter Name</Label>
                                        <Input
                                            type='text'
                                            placeholder='Enter your name'
                                            id='name'
                                            onChange={(e) => handleChange(e,'name')}
                                            value={data.name}
                                        />
                                    </FormGroup>
                                    {/* Email field */}
                                    <FormGroup>
                                        <Label for='email'>Enter your email address</Label>
                                        <Input
                                            type='email'
                                            placeholder='Enter your email address'
                                            id='email'
                                            onChange={(e) => handleChange(e,'email')}
                                            value={data.email}
                                        />
                                    </FormGroup>
                                    {/* Password field */}
                                    <FormGroup>
                                        <Label for='password'>Enter password</Label>
                                        <Input
                                            type='password'
                                            placeholder='Enter your password'
                                            id='password'
                                            onChange={(e) => handleChange(e,'password')}
                                            value={data.password}

                                        />
                                    </FormGroup>
                                    {/* Text field */}
                                    <FormGroup>
                                        <Label for='text'>Description</Label>
                                        <Input
                                            type='textarea'
                                            placeholder='Enter content'
                                            id='text'
                                            style={{ height: '250px' }}
                                            onChange={(e) => handleChange(e,'about')}
                                            value={data.about}
                                        />
                                    </FormGroup>

                                    <Container className='text-center'>

                                        <Button outline color='light'>Register</Button>
                                        <Button onClick={clearData} color='primary' outline type='reset' className='ml-5'>Reset</Button>

                                    </Container>

                                </Form>

                            </CardBody>

                        </Card>

                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default Signup