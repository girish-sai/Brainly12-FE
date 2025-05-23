import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
  return <div className="h-screen pl-6 bg-white border-r w-72 fixed left-0 top-0">
    <div className="flex text-2xl font-bold text-purple-700 pt-8 items-center">
      <div className="pr-2">
      <Logo/>
      </div>
      
      Brainly
    </div>
    <div className="pt-8 pl-4 ">
      <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
      <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
    </div>
  </div>
}