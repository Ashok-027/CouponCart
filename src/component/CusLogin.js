import { Button, Container } from '@material-ui/core';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './style.css';


function CusLogin() {
    const containerStyle = { backgroundColor: "white", width: "25%", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", margin: "100px auto" }
    const textFieldStyle = { marginBottom: "15px"}
    const buttonStyle = { backgroundColor: "black", color: "white", marginBottom: "5px" }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate();
    const handleFormSubmit = () => {
        if (email === 'Ashok' && password === '12345') {
            navigate("/homepage");

        }

    }

    return (
        
        <>    {/* <Navbar/> */}
        <div className='customerpage'>
            <Container style={containerStyle} className='login'>
                  <form onSubmit={handleFormSubmit} >
                    <h2 alignItems='center' >Customer Login</h2>
                    {/* <FormControl style={{ paddingBottom: "20px" }}> */}
                    {/* <Form >
                        <Form.Group>
                            <Form.Label >UserName: <Form.Control type="text" id='username' style={textFieldStyle} placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></Form.Label>
                            <Form.Label >Password: <Form.Control type="password" id='password' style={textFieldStyle} placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/></Form.Label>
                        
                        </Form.Group>
                        <Button variant="primary"  style={buttonStyle} onSubmit={handleFormSubmit} >Submit </Button>      
                    </Form> */}

                        UserName: <input type="text" id='username' label='Username' style={textFieldStyle} variant='outlined' placeholder='Customer username' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
                        Password: <input type="password" id='password' label='password' style={textFieldStyle} variant='outlined' placeholder='Customer password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
                        <Button variant='success' type="submit"   style={buttonStyle} fullWidth>Submit</Button>
                          
                    {/* </FormControl>  */}
                    </form>
                    
            </Container>
        </div>
        </>  
    )
}


// import React, { useState } from 'react';
// import './CusLogin.css'; // Import the CSS file
 
// function CusLogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };
 
//   return (
//     <div class="container">
//   <div class="row justify-content-center">
//     <div class="col-md-6">
//       <div class="card">
//         <div class="card-body">
//           <form>
//             <div class="input-group mb-3">
//               <span class="input-group-text"><i class="fa fa-user"></i></span>
//               <input type="text" class="form-control" placeholder="Username" />
//             </div>
//             <div class="input-group mb-3">
//               <span class="input-group-text"><i class="fa fa-lock"></i></span>
//               <input type="password" class="form-control" placeholder="Password" />
//             </div>
            
//             <button type="submit" class="btn btn-primary btn-block">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
 
//   );
// }
 
 
export default CusLogin;

