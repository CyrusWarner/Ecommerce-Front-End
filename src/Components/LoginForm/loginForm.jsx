import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';


const LoginForm = (props) => {
  const logInValues = {
    username: "",
    password: ""
}
  const history = useHistory()
  const [logInInfo, setLogInInfo] = useState(logInValues);
  

const handleChange = (event) => {
  setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
}
const handleSubmit = (event) => {
  event.preventDefault();
  logIn();
}

const logIn = async () => {
  let userData = logInInfo;
  let response = await axios.post("https://localhost:44394/api/authentication/login", userData);
  props.setUserToken(response.data.token)
  if (response.data.length !== 0){
    history.push("/")
  }
}
  
  
  return ( 
    <Container>
            <Row>
                <Col></Col>
                <Col>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                    <input className="form-control" name="username" placeholder="Username..." onChange={handleChange}></input>
                    <input className="form-control" name="password" placeholder="Password..." onChange={handleChange}></input>
                    <button>Login</button>
                    </form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
   );
}
 
export default LoginForm;