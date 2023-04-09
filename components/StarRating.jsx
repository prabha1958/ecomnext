import { useState } from "react"
import {FaStar} from "react-icons/fa"

import { useAuthContext } from "@/hooks/useAuthContext"

export default function StarRating({pid}) {
    const [currentValue,setCurrentValue] = useState(0)
    const [hoverValue,setHoverValue] = useState(undefined)
    const {rate,isLoading,loginError,currentUser} = useAuthContext()

    const stars = Array(5).fill(0)
    
    
    const handleClick = (value)=>{
        setCurrentValue(value)
        rate(pid,currentUser.uid,value)
    }

    const handleMouseOver = (value)=>{
        setHoverValue(value)
    }

    const handleMouseLeave = ()=>{
          setHoverValue(undefined)
    }
    


    const colors = {
        orange:"#E5AE1C",
        gray:"#E9E9E8"
    }
    
 

  return (
    <div className="flex flex-col items-start justify-start cursor-pointer gap-1">
        <p>Give Your rating</p>
        {!isLoading && <div className="flex items-center gap-1">
                   <FaStar
                       
                        size={25} 
                        color={ hoverValue >0 || currentValue > 0? colors.orange:colors.gray}
                        onClick={()=>handleClick(1)}
                        onMouseOver={()=>handleMouseOver(1)}
                        onMouseLeave={handleMouseLeave}
                    />
                    <FaStar
                       
                       size={25} 
                       color={hoverValue >1 || currentValue > 1 ? colors.orange:colors.gray}
                       onClick={()=>handleClick(2)}
                       onMouseOver={()=>handleMouseOver(2)}
                       onMouseLeave={handleMouseLeave}
                   />
                   <FaStar
                       
                       size={25} 
                       color={hoverValue >2 || currentValue > 2? colors.orange:colors.gray}
                       onClick={()=>handleClick(3)}
                       onMouseOver={()=>handleMouseOver(3)}
                       onMouseLeave={handleMouseLeave}
                   
                   />
                    <FaStar
                       
                       size={25} 
                       color={hoverValue >3 || currentValue > 3 ? colors.orange:colors.gray}
                       onClick={()=>handleClick(4)}
                       onMouseOver={()=>handleMouseOver(4)}
                       onMouseLeave={handleMouseLeave}
                   
                   />
                    <FaStar
                       
                       size={25} 
                       color={hoverValue >4 || currentValue > 4? colors.orange:colors.gray}
                       onClick={()=>handleClick(5)}
                       onMouseOver={()=>handleMouseOver(5)}
                       onMouseLeave={handleMouseLeave}
                   />

                   <div className=" ml-2 p-1 rounded-full font-bold bg-themed4 text-sm text-white">{hoverValue}</div>
            
        </div>}
         {isLoading && <p className="text-xs font-bold text-red-500">Please wait ...</p>} 
     
    </div>
  )
  
}
