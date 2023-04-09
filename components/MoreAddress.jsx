import AddAddress from "./AddAddress";


export default function MoreAddress({setOpen}) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-themed2 flex flex-col items-end justify-center py-5 px-3 overflow-y-scroll ">    
    <div className=" max-w-2xl mx-auto bg-slate-300 opacity-100   px-10 py-6">
              <div className="w-full text-right">
                    <p onClick={()=>setOpen(false)} className="cursor-pointer">Close</p> 
                </div>
              
         <AddAddress setOpen={setOpen} />
     </div>
     </div>
  )
}
