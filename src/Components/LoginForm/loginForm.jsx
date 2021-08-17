import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';


const LoginForm = (props) => {
  const logInValues = {
    username: "",
    password: ""
}
  const history = useHistory()
  const [logInInfo, setLogInInfo] = useState(logInValues);
  const [logInError, setLoginError] = useState("")  
const handleChange = (event) => {
  setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
}
const handleSubmit = (event) => {
  event.preventDefault();
  logIn();
}

const logIn = async () => {
  let userData = logInInfo;
  let res = await axios.post("https://localhost:44394/api/authentication/login", userData).catch(function(error) {
    if (error.response) {
      setLoginError("Either your username or password is incorrect")
    }
  });
  if (res !== undefined){
    props.setUserToken(res.data.token)
    history.push("/")
  }
}
  
  
  return ( 
    <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                <div>
                    <h1 className="title">Login</h1>
                    <form onSubmit={handleSubmit}>
                      <div>
                      <div className="text-center" style={{color: "yellow"}}>{logInError}</div>
                        <h5 className="signupTitle">Username:</h5>
                    <input className="form-control" name="username" placeholder="Please enter your username..." onChange={handleChange}></input>
                    </div>
                    <div>
                      <h5 className="signupTitle">Password:</h5>
                    <input className="form-control" name="password" placeholder="Please enter your password..." onChange={handleChange}></input>
                    <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} type="submit" className="mt-2">Login</Button>
                    </div>
                    </form>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
   );
}
 
export default LoginForm;