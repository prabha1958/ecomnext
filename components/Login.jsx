import { useAuthContext } from "@/hooks/useAuthContext"
import { useRouter } from "next/router"
import { useState } from "react"



export default function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const {login,isLoading,currentUser,loginError} = useAuthContext()
    const router = useRouter()


    const handleSubmit = (e)=>{
        e.preventDefault()
        login(email,password)
    }

   

 if(!currentUser){
  return (
     <form onSubmit={handleSubmit} className="w-80 mx-auto">
         <p>Login</p>
                 <div className="w-full">
                    <p className="text-xs font-bold text-gray-700 ">Email</p>
                    <input 
                     placeholder="enter your email"
                     type="text"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="email"
                     onChange={(e)=>setEmail(e.target.value)}
                     value={email}
                     required
                     />
                </div>
                <div className="w-full">
                    <p className="text-xs font-bold text-gray-700 ">Password</p>
                    <input 
                     placeholder="enter your password"
                     type="password"
                     className="px-2 py-2 text-sm font-medium rounded-lg w-full border border-themel1"
                     name="email"
                     onChange={(e)=>setPassword(e.target.value)}
                     value={password}
                     required
                     />
                </div>
                {!isLoading && <button type="submit" className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Login</button>}
                {isLoading && <button  className=" rounded-lg px-3 py-2 mt-3 bg-themed4 text-sm font-medium text-white">Logging you in ....</button>}
                {loginError && <p className="py-2 text-xs font-bold text-red-500">{loginError}</p>}
               
     </form>
  )}else{
     router.push({pathname:"/"})
  }
}
