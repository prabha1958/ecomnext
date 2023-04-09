import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import { client } from "@/lib/client";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import Link from "next/link";
import { useAuthContext } from "@/hooks/useAuthContext";
import Review from "./Review";
import StarRating from "./StarRating";
import { collection,query,where, onSnapshot,doc, setDoc,getDocs  } from "firebase/firestore";
import {  db } from "../firebase/config";
import Rate from "./Rate";
import OtherRelated from "./OtherRelated";
import moment from 'moment'
import Ratex from "./Ratex";
import { v4 as uuid } from "uuid";

export default function WomenclotheSingle({womenclothe }) {
  
    const builder = imageUrlBuilder(client);
    const [selIndex,setSelIndex] = useState(0)
    const [allwoman, setAllwoman] = useState()
    const {currentUser } = useAuthContext()
    const [open,setOpen] = useState(false)
    const [userrate,setUserrate]= useState()
    const [code,setCode] = useState(womenclothe.category)
    const discount = (womenclothe.mrp - womenclothe.saleprice)/womenclothe.mrp*100
    const [rate,setRate] = useState()
    const [reviews,setReviews] = useState([])
    const [userreview,setUserreview] = useState([])

   
    useEffect(()=>{
      async function  go(){
       
       const query = groq`*[_type == 'womensclothe' && category == '${code}']`
        const result = await client.fetch(query)
         setAllwoman(result)

       }
       go()
    },[])


    useEffect(()=>{
      async function go(){
        if(currentUser){
        const q = query(collection(db,"ratings"), where("userid","==",currentUser.uid), where("pid","==", womenclothe.slug.current))
            const res =  onSnapshot(q,(snapshot)=>{
               snapshot.docs.forEach((doc)=>{
                 setUserrate(doc.data().rate)
               
               })
            })
          }
      }
      go()
    },[womenclothe.slug.current])

     
    const handleClose = ()=>{
      setOpen(false)
    }
    
    const other = (allwoman || []).filter(item=>item.slug.current !== womenclothe.slug.current)

    useEffect(()=>{
      async function go(){
      const q = query(collection(db,"ratings"), where("pid","==", womenclothe.slug.current))
      const res =  onSnapshot(q,(snapshot)=>{
         let result =[]
        
        snapshot.docs.forEach((doc)=>{
            result.push(doc.data().rate)
          
            let sum = 0
            for (let i = 0; i < result.length; i++) {
              sum += result[i]
            }
           
             let ar = sum/result.length
          
             setRate(ar)
            
                })
            })
          }
          go()   
     },[womenclothe.slug.current])
       
     useEffect(()=>{
      if(currentUser){
       async function go(){
          const q = query(collection(db,"reviews"),where("pid","==",womenclothe.slug.current))
          const res =  onSnapshot(q,(snapshot)=>{
              let result = []
               snapshot.docs.forEach((doc)=>{
                   result.push(doc.data())
                
               })
               let urev = result.filter(item=>item.userid == currentUser.uid)
              
               setUserreview(urev)
               setReviews(result)
               
               
          })
       }
       go()
      }
     },[])


     const addToCart = async (pid,userid,slug,pname,price)=>{
        
      const q = query(collection(db,"cart"), where("pid","==",pid))
      const result = await getDocs(q)
        let exprod = []
       result.forEach((doc)=>{
          exprod.push(doc.data())
       })
       if(exprod.length <1){
         setDoc(doc(db,"cart",uuid()),{
            pid,
            userid,
            slug,
            pname,
            price
            
         })
      }
      
  }

  return (
    <div className="w-full mt-12 mb-28 ">
        <div className="w-full text-center py-3">
           <h1 className="text-xl font-bold text-themed4">{womenclothe.name}</h1>
        </div>
        
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row itmes-center justify-center px-2 mb-8 mt-8 ">
        
         <div className="flex-1 flex gap-3  items-center justify-center">
            
             <div className="grid grid-cols-1 gap-2 ">
               {womenclothe.image && womenclothe.image.map((item,index)=>(
                  <Image 
                  className={index == selIndex?'border-2 border-themered':'border border-themed3'}
                  style={{ "cursor":"pointer"}}
                  src={builder.image(item).width(70).height(90).url()}
                  width={70}
                  height={90}
                  alt={womenclothe.name}
                  onClick={()=>setSelIndex(index)}
                  />
               ))}
                    </div> 
                    <div className=" flex items-center justify-center  " >
                    <Image
                        className="object-cover"
                        src={builder.image(womenclothe.image[selIndex]).width(450).height(500).url()}
                        width={450}
                        height={500}
                        alt={womenclothe.name}
                     />
                    </div>
             </div>
         
         <div className="flex-1 flex flex-col px-6 mt-10 md:mt-0 items-start ">
            <p className="text-2xl font-extrabold text-themed4">{womenclothe.shortdesc}</p>
            <Rate rate={rate} />
            <p className="text-sm font-medium text-gray-500">{womenclothe.fulldesc[0]}</p>
           
            <div className="flex flex-col mt-8 items-start space-y-2">
                 <p className="px-4 py-1 bg-themered rounded-lg text-white text-xl">{Math.trunc(discount)} %  off</p>
                <p className="text-2xl font-bold text-gray-900 ">&#8377; {womenclothe.saleprice} <span className="text-xs font-thin text-gray-600 line-through">mrp :&#8377; {womenclothe.mrp}</span></p>
                <p className="text-xs font-bold text-gray-400">&#40; &#8377;{womenclothe.mrp - womenclothe.saleprice} off &#41;</p>
            </div>
            {currentUser && (
                  <div className=" flex items-start mt-8 justify-sgart gap-2">
                  <button className="text-md rounded-lg font-thin bg-themered text-themel4 px-4 py-2">By Now</button>
                  <button onClick={()=>addToCart(womenclothe._id,currentUser.uid,womenclothe.slug.current,womenclothe.name,womenclothe.saleprice)}  className="text-md rounded-lg font-thin bg-themeblue text-themel4 px-4 py-2 ">Add to cart</button>
              </div>
            )}
           
            <div className="flex flex-col mt-8 items-start space-y-2">
                <p><span className="text-sm font-light text-gray-800">Color:</span>&nbsp;<span className="text-sm text-bold text-gray-600">{womenclothe.color}</span></p>
                <p><span className="text-sm font-light text-gray-800">Size:</span>&nbsp;<span className="text-sm text-bold text-gray-600">{womenclothe.size}</span></p>
            </div>
            <div className="flex items-start mt-8 justify-sgart">
                <p className="text-xl font-bold text-themed4">About the product</p>

            </div>
            <div className=" flex flex-col items-start mt-8 justify-sgart gap-2">
              {womenclothe.fulldesc && womenclothe.fulldesc.map((item,index)=>(
                   <p key={index} className="text-sm font-semibold text-gray-600">{index+1}. {item}</p>
              ))} 
            </div>

         </div>
           
      </div>
      <div className="max-w-7xl mx-auto my-8 ">
         <hr className="w-full h-1 bg-themed4 " />
         <div className="w-full text-center">
            <h1 className="text-xl font-bold text-themed4 my-5">Other related products</h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
              
            {other && other.map((item, index)=>(
              
                 <Link href={`/womenclothe/${item.slug.current}`}><OtherRelated other={item} /></Link> 
                
               ))}
               
            </div>
         </div>
      </div>

      <div className=" max-w-7xl mx-auto  my-2 flex items-start px-2">
                <div className="max-w-4xl py-2">
                
                       <div className="flex items-center justify-center gap-4 mb-5">
                       {currentUser && userreview.length == 0 ? (
                        <>
                          
                            <div className="mt-2 text-left">
                             <p onClick={()=>setOpen(true)} className="text-sm font-medium text-themed4 cursor-pointer">Rate and review this product</p>
                            {open && <Review handleClose={handleClose} pid = {womenclothe.slug.current} name={currentUser.displayName}/>}
                             
                            </div>  
                           
                        </>):""}
                        
 
                        
                       </div>
                 
                
                    
                    {currentUser && !userrate && <StarRating pid={womenclothe.slug.current} />}
                    <div className="flex items-center justify-center gap-2">
                    {currentUser && userrate && <p>your rating is</p>}{userrate && <Rate  rate={userrate} />}
                    </div>
                   
                    
                    
                </div>
                   
            </div>
            <div className=" max-w-7xl mx-auto  my-2 flex items-start px-2">
            <div className="max-w-4xl py-2">
              <p className="text-xl font-bold text-themed4">REVIEWS</p>
              {currentUser && reviews && reviews.map((item,index)=>(
                          <div key={index} className="flex flex-col items-start my-2">
                             <div className="flex items-start gap-2 justify-center">
                                <Ratex pid={item.pid} userid={item.userid} />
                                <p className="text-sm font-bold text-themed4">{item.name}</p>
                                <p className="text-xs font-light text-gray-600">{moment(item.date).fromNow()}</p>
                             </div>
                             <p className="text-sm font-nunito text-themed4">{item.rev}</p>
                          </div>
                       ))}
             </div>
            </div>
           
    </div>
  )
}



