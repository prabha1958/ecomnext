
import { useAuthContext } from "@/hooks/useAuthContext";
import { doc, setDoc, getDoc,  collection,query,where, getDocs, updateDoc ,  } from "firebase/firestore";
import { auth, storage, db } from "../firebase/config";

export default function Address({address}) {
  const {currentUser} = useAuthContext()
  

 
  const setDefault = async (id)=>{
    const q = query(collection(db,"addresses"),where("userid","==",currentUser.uid), where("default","==", true))
       const addRef = await getDocs(q)
       let result = []
         addRef.forEach(doc=>{
           result.push({...doc.data(), id:doc.id})
         })
         if(result.length>0){
          updateDoc(doc(db,"addresses", result[0].id),{
            default:false
           })
         }
          
         updateDoc(doc(db,"addresses",id),{
          default:true
         })
        
       
         
      
  }

  return (
    <div className=" w-96 mx-auto flex items-start gap-3">
        
         <div  className="flex flex-col items-start space-y-1 cursor-pointer">
            <p className="text-xs font-bold text-themed4">{address.premises}</p>
            <p className="text-xs font-bold text-themed4">{address.street}</p>
            <p className="text-xs font-bold text-themed4">{address.area}</p>
            <p className="text-xs font-bold text-themed4">{address.landmark}</p>
            <p className="text-xs font-bold text-themed4">{address.city}</p>
            <p className="text-xs font-bold text-themed4">{address.state}</p>
            <p className="text-xs font-bold text-themed4">{address.pin}</p>
         </div>
         <p>{address.default?<p className="text-xs font-bold text-orange-900">default</p>:<p onClick={()=>setDefault(address.id)} className="text-xs font-bold text-themeblue cursor-pointer">set default</p>}</p>
        
    </div>
  )
}
