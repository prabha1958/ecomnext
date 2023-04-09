

export default function Head() {
  return (
    <>
    <div className="hidden md:block w-full bg-orange-200">
       <div className=" max-w-7xl mx-auto flex items-center justify-center gap-7 bg-orange-200" style={{ "height":"450px"}}>
           <div>
             <img src="img13.png" alt="sirilsaree" className=" h-96 w-auto" />
           </div>
           <div className="flex flex-col items-center ">
              <p className=" text-2xl font-bold text-themed4 shadow-md">Festive Season sales</p>
              <p className=" mt-3 text-5xl font-extrabold text-themed3 text-center ">SIRIL Women's Printed Poly Silk Sarees</p>
              <p className=" mt-3 text-2xl font-thin text-themed4">50% off during the offer</p>
              <p className=" mt-10">From 15th to 22 March 2023</p>

           </div>
       </div>
    </div>
    <div className="md:hidden w-full bg-orange-200">
       <div className=" max-w-5xl mx-auto flex flex-col items-center justify-center gap-7 bg-orange-200 mt-11" style={{ "height":"450px"}}>
           <div>
             <img src="/img13.png" alt="sirilsaree" className=" h-36 w-auto" />
           </div>
           <div className="flex flex-col items-center ">
              <p className=" text-xl font-bold text-themed4 shadow-md">Festive Season sales</p>
              <p className=" mt-2 text-2xl font-extrabold text-themed3 text-center ">SIRIL Women's Printed Poly Silk Sarees</p>
              <p className=" mt-2 text-xl font-thin text-themed4">50% off during the offer</p>
              <p className=" mt-5">From 15th to 22 March 2023</p>

           </div>
       </div>
    </div>
    </>
  )
}
