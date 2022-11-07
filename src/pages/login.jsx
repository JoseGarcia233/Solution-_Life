import "../css/login.css";
import { useState } from "react";
import apiJson from "../hooks/apiJson";

import Swal from "sweetalert2"


const Login = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")

    var registerData = {
        "UserName": username,
        "Email": email,
        "Password": password,
        "Gender": gender
    }

    var loginData = {
        "Email": email,
        "Password": password
    }

    const successAlert = (msj) =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    }    

    const errorAlert = (msj) =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
    }

    const login = async() => {
        await apiJson.login(loginData)
        .then(({data}) => { 
            console.log(data);
            let i;
            let emailUser;

            for (i = 0; i < data.length; i++){
                if (data[i].Email === loginData.Email) {
                    emailUser = data[i]
                    break
                }else if (loginData.Email !== data[i].Email && loginData.Email.length > 0) {
                    errorAlert("User not found")

                }else if(loginData.Email === "") {
                    errorAlert("fill in the missing data")
                }
            }

            if (emailUser.Email === loginData.Email && emailUser.Password === loginData.Password) {
                window.localStorage.setItem("loginDataSolutionLife", JSON.stringify(data[i]))
                successAlert("Successfully logged in")
                window.location.href = '/'

            }else if (emailUser.Email === loginData.Email && emailUser.Password !== loginData.Password) {
                errorAlert("Incorrect password")
            }

        })
        .catch((e) => console.log(e))
    }
    const register = async() => {
        await apiJson.validateUserExists(registerData.Email)
        .then(({data}) => {
            if (data.length === 0) {
                apiJson.register(registerData)
                .then(() => {
                    successAlert("added successfully")
                    document.getElementById('chk').click()
                })
                .catch((e) => {
                    errorAlert("Error registering")
                })
            }   else errorAlert("User already exists")
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="containerLogin" data-aos="fade-left">
            <div className="main">  	
                <input type="checkbox" id="chk" aria-hidden="true"/>

                <div className="signup">
                    <form onSubmit={formSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required 
                        
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <select className="form-select" onChange={(event) => setGender(event.target.value)} required>
                            <option value="">Select gender</option>
                            <option value="men">Men</option>
                            <option value="woman">Woman</option>
                        </select>
                        <input type="email" name="email" placeholder="Email" required   
                        
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input type="password" name="pswd" placeholder="Password" required 
                        
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button type="submit" onClick={() => register()}>Sign up</button>
                    </form>
                </div>

                <div className="login" id="login">
                    <form onSubmit={formSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required 
                        
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input type="password" name="pswd" placeholder="Password" required 
                        
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button className="btnLogin" onClick={() => login()}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;