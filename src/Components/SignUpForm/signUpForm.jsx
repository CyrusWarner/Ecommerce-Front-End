import React, {useState} from 'react';  
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';

const SignUpForm = () => {
    const initialUserInfo = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phonenumber: ""
    }
    const history = useHistory()
    const [eachEntry, setEachEntry] = useState(initialUserInfo)
    const [firstNameError, setFirstNameError] = useState({})
    const [lastNameError, setLastNameError] = useState({})
    const [userNameError, setUserNameError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [passwordError, setPasswordError] = useState({})

    const signUpFormValidation = () => {
        const firstNameError = {};
        const lastNameError = {};
        const userNameError = {};
        const emailError = {};
        const passwordError = {};
        let isValid = true;
        if (eachEntry.firstname.trim().length == 0 ){
            firstNameError.firstNameEmpty = "First name is required";
            isValid = false;
        }
        if(eachEntry.lastname.trim().length == 0){
            lastNameError.lastNameEmpty = "last name is required";
            isValid = false;
        }
        if(eachEntry.username.trim().length == 0) {
            userNameError.userNameEmpty = "username is required"
            isValid = false;
        }
        if(eachEntry.email.trim().length == 0){
            emailError.emailEmpty = "email is required"
            isValid = false;
        }
        if(eachEntry.password.trim().length == 0){
            passwordError.passwordEmpty = "password is required"
            isValid = false;
        }
        setFirstNameError(firstNameError);
        setLastNameError(lastNameError);
        setUserNameError(userNameError)
        setEmailError(emailError)
        setPasswordError(passwordError)
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp();
        
    }

    const handleChange = (event) => {
        setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
      };

    const signUp = async () => {
        let userData = eachEntry;
        const isValid = signUpFormValidation();
        if(isValid){
            let response = await axios.post("https://localhost:44394/api/authentication", userData);
            if (response.data.length !== 0){
                history.push("/Login")
            }  
            setEachEntry(initialUserInfo)
        }
    }
    return (
        
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <div>
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name</label>
                    <input  className="form-control" value={eachEntry.firstname} name="firstname" placeholder="First name..." onChange={handleChange}></input>
                    {Object.keys(firstNameError).map((key) => {
                        return <div style={{color: "yellow"}}>{firstNameError[key]} </div>
                    })}
                    </div>
                    <label>Username:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.lastname} name="lastname" placeholder="Last name..." onChange={handleChange}></input>
                    {Object.keys(lastNameError).map((key) => {
                        return <div style={{color: "yellow"}}>{lastNameError[key]} </div>
                    })}
                    </div>
                    <label>Email:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.username} name="username" placeholder="Username..." onChange={handleChange}></input>
                    {Object.keys(userNameError).map((key) => {
                        return <div style={{color: "yellow"}}>{userNameError[key]} </div>
                    })}
                    </div>
                    <label>Password:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.email} name="email" placeholder="Email..." onChange={handleChange}></input>
                    {Object.keys(emailError).map((key) => {
                        return <div style={{color: "yellow"}}>{emailError[key]} </div>
                    })}
                    </div>
                    <label>Password:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.password} name="password" placeholder="Password..." onChange={handleChange}></input>
                    {Object.keys(passwordError).map((key) => {
                        return <div style={{color: "yellow"}}>{passwordError[key]} </div>
                    })}
                    </div>
                    <label>Phone Number:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.phonenumber} name="phonenumber" placeholder="Phone number..." onChange={handleChange}></input>
                    </div>
                    <Button className="mt-2" type="submit">Sign Up</Button>
                    </form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default SignUpForm