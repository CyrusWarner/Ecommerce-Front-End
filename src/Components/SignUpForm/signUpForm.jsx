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

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp();
        
    }

    const handleChange = (event) => {
        setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
      };

    const signUp = async () => {
        let userData = eachEntry;
        let response = await axios.post("https://localhost:44394/api/authentication", userData);
        setEachEntry(initialUserInfo)
        if (response.data.length !== 0){
            console.log("hello");
            history.push("/Login")
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
                    </div>
                    <label>Username:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.lastname} name="lastname" placeholder="Last name..." onChange={handleChange}></input>
                    </div>
                    <label>Email:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.username} name="username" placeholder="Username..." onChange={handleChange}></input>
                    </div>
                    <label>Password:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.email} name="email" placeholder="Email..." onChange={handleChange}></input>
                    </div>
                    <label>Password:</label>
                    <div>
                    <input  className="form-control" value={eachEntry.password} name="password" placeholder="Password..." onChange={handleChange}></input>
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