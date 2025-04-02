interface InputProps{
  placeholder:string;
  reference?:any
}
export function Input({placeholder,reference}:InputProps){
  return <input type={"text"} placeholder={placeholder} className="px-4 py-2  border rounded-md m-2" ref={reference} />
}