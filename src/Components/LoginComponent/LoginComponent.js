import React from 'react';
import './login.css';
import {Button, FormFeedback} from 'reactstrap';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { redirectTo } from "@reach/router"


const LoginForm = () =>{
  
  let dataStatus = false;
  const { handleSubmit, register, errors } = useForm();
  function onSubmit (values) {
    console.log(values);
    axios.post('https://mekvahan.com/api/android_intern_task',values)
    .then(response => {
      console.log(response);
      dataStatus = response.data.status;
    })
    .catch(error => {
      console.log(error);
      alert(error);
    }).then(()=>{
        if(dataStatus === true){
            window.location = "/home";
        }else{
            alert('Wrong Username Or Password!');
        }
    })
    
  } 


    return (
        <div>

            <div className="container custommargin">
                <div className="row shadowcustom">
                    <div className="col-12 col-md-4" style={{"padding-left":"0px"}}><img className="imagecustom" src="assets/images/car.png"></img></div>
                    <div className="col-12 col-md-8">
                        <div className="row justify-content-center mt-4">
                            <div><img className="logocustom" src="assets/images/logo.png"></img></div>
                            <div className="headcustom">MEKVAHAN</div>
                        </div>
                        <div className="row justify-content-center mt-5 customform">
                            <center>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="floating-form">
                                    <div class="floating-label">      
                                        <input class="floating-input" type="text" name="mobile" placeholder=" " ref={register({required: "Required",minLength:10,pattern: {value: /^[-+]?[0-9]+$/,message: "invalid number"}})}></input>
                                        <FormFeedback>{errors.mobile && errors.mobile.message}</FormFeedback>
                                        <span class="highlight"></span>
                                        <label>10 Digit Mobile Number</label>
                                    </div>

                                    <div class="floating-label mt-5">      
                                        <input class="floating-input" type="password" name="password" onclick="(this.type='time')" placeholder=" " ref={register({required: "Required",minLength:10, message: "Invalid Password"})}></input>
                                        <FormFeedback>{errors.password && errors.password.message}</FormFeedback>
                                        <div className="row"><i className="form-control-custom">Forgot password?</i></div>
                                        <span class="highlight"></span>
                                        <label>Password</label>
                                    </div>
                                </div>
                                <Button className="btncustom" type="submit" size="lg" block>Login</Button>
                                <div className="row custommargin"><div className="textcustom">Don't have account?</div><div className="form-control-custom2 pl-1">Sign Up Now</div></div>
                            </form>
                            </center>
                        </div>
                        <div className="row customafter">
                            <h2><span>or</span></h2>
                            <div className="row mt-3 textcustom2"><div className="col-12">Continue With</div>
                            <div className="col-12 custompad2">
                                    <img className="img-fluid3" src="assets/images/google.png"></img>
                                    <img className="img-fluid3" src="assets/images/facebook.png"></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;