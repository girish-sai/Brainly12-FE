import { useEffect, useState } from 'react'

import { Button } from '../Components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../Components/Card'
import { CreateContentModel } from '../Components/CreateContentModel'
import { Sidebar } from '../Components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'



 export function Dashboard() {
  const [modalOpen,setModalOpen]=useState(false);
  const {contents,refresh}=useContent();
  useEffect(()=>{
    refresh();
  },[modalOpen])

  return (
    <div className=''>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-300'>
      <CreateContentModel open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className='flex justify-end gap-4'>
    
    <Button variant='primary' text='Add Content' startIcon={<PlusIcon/>} onClick={()=>{
      setModalOpen(true);
    }} />
    <Button variant='secondary' onClick={async ()=>{
      const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
        share:true
      },{
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      });
      const shareUrl= `http://localhost:5173/share/${response.data.hash}` 
      alert(shareUrl);
    }} text='Share Brain' startIcon={<ShareIcon/>} />
    </div>
    <div className='flex gap-4 flex-wrap'>
      {contents.map(({type,link,title})=><Card type={type} 
      link={link}
      title={title}/>)
      }
    </div>
    </div>
    </div>
  )
}


