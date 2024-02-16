import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export const Signin = () => {
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
   
  return (
    <div>
      <div>
        <div>
          <Heading label={"Sign in"} />
          <Subheading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e)=>{
            setusername(e.target.value)
          }} placeholder="anuragnegi@gmail.com" label={"Email"} />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder="123456" label={"Password"}/>
          <div>
            <Button onClick={async ()=>{
             const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
             });
             localStorage.setItem("token ",response.data.token);
             navigate("/dashboard");   
            }} label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
