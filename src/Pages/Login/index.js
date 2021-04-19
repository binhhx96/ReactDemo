import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthServices from "../../Services/Authenticate";

class Login extends Component {
    constructor() {
        super();

        this.state = {
          email: '',
          password: '',
          rememberMe: false,
        };
    }

    changeEmailValue = (e) => {
        this.setState({email: e.target.value.trim()});
    }

    changePasswordValue = (e) => {
        this.setState({password: e.target.value.trim()});
    }

    changeRememberMe = (e) => {
        this.setState({rememberMe: e.target.checked});
    }

    loginSubmit = (e) => {
        e.preventDefault();

        const {email, password, rememberMe} = this.state;
        return AuthServices.login(email, password).then((response) => {
           console.log(response);
        });
    }

    render() {
        return (
            <section>
                <Form onSubmit={this.loginSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmailValue}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.changePasswordValue} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" onChange={this.changeRememberMe} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default Login;