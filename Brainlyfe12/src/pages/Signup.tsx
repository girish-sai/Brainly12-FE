import { useRef } from "react";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const navigate=useNavigate();
  async function signup(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    await axios.post(BACKEND_URL+"/api/v1/signup",{
        username,
        password
      
    })
    alert("You Have Signed Up")
    navigate("/signin");  

  }
  return <div className="h-screen w-screen bg-gray-200 flex justify-center  items-center">
    <div className="bg-white flex flex-col items-center p-6  rounded border min-w-48">
      <div className="flex flex-col">
      <Input reference={usernameRef} placeholder="Username"/>
      <Input reference={passwordRef} placeholder="Password"/>
      </div>
      <Button onClick={signup} variant="primary" text="SignUp" loading={false} fullWidth={true}/>

    </div>

   </div>
}