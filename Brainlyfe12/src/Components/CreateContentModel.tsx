import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
enum ContentType{
  Youtube="youtube",
  Twitter="twitter"
}
export function CreateContentModel({open,onClose}){
  const titleRef=useRef<HTMLInputElement>(null);
  const linkRef=useRef<HTMLInputElement>(null);
  const [type,setType]=useState(ContentType.Youtube)
  function addContent(){
    const title=titleRef.current?.value;
    const link=linkRef.current?.value;
    axios.post(`${BACKEND_URL}/api/v1/content`,{
      link,
      title,
      type
    },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
    
  }

  return <div>
    {open&& <div> 
    <div className="w-screen h-screen opacity-60 bg-gray-500 fixed top-0 left-0 flex justify-center"  >
     
      
      </div>
      <div className="w-screen h-screen   fixed top-0 left-0 flex justify-center"  >
     
      <div className="flex justify-center flex-col">
      <span className="bg-white opacity-100 p-4 rounded fixed ">
        <div className="flex justify-end">
          <div onClick={onClose} className="cursor-pointer">
          <CrossIcon/>
          </div>
        
        </div>
        <div className="flex flex-col ">
          
          <Input reference={titleRef} placeholder={"Title"}/>
          <Input reference={linkRef} placeholder={"Link"}/>
          

        </div>
        <div className="">
          <h1>Type:</h1>
          <div className="flex gap-4  justify-center p-4">
          <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{
            setType(ContentType.Youtube)
          }}/>
          <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
            setType(ContentType.Twitter)}}/>
            </div>
        </div>
        <div className="flex justify-center">
        <Button onClick={addContent} variant="primary" text="Submit"/>
        </div>
       
      </span>
      </div>
      </div>
     </div>
     
      }
  </div> 
}

