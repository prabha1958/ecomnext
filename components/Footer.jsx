

export default function Footer() {
  return (
    <div className="px-4 py-5 bg-themed4 mx-auto hidden md:block">
        <div className="w-full flex items-center justify-center my-8">
             <img src="/logo.png" className="w-1/18 h-9" />
          </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-around">
           <div className="flex flex-col place-items-start mb-2 md:mb-0 space-y-1">
               <p className="text-sm font-bold text-themel4">Contact us</p>
                <i className="text-sm font-bold text-themel4">061-75037621</i>
                <p><span className="text-sm font-bold text-themel4">email:</span><span className="text-sm font-bold text-themel4">info@gbay.in</span></p>
                <p className="text-sm font-bold text-themel4">Blaze Avenue ,/n 59, Mount Road /n Chennai-02 </p>
           </div>
           <div className="flex flex-col place-items-start mb-2 md:mb-0 space-y-1">
               <p className="text-sm font-bold text-themel4">About us</p>
                <i className="text-sm font-bold text-themel4">careera</i>
                <p><span className="text-sm font-bold text-themel4">invest with us:</span></p>
                <p className="text-sm font-bold text-themel4">send us feedback</p>
           </div>
           <div className="flex flex-col place-items-start mb-2 md:mb-0  space-y-1">
               <p className="text-sm font-bold text-themel4">Home</p>
                <i className="text-sm font-bold text-themel4">Login</i>
                <p><span className="text-sm font-bold text-themel4">register</span></p>
                <p className="text-sm font-bold text-themel4"></p>
           </div>
           <div className="flex flex-col place-items-start mb-2 md:mb-0   space-y-1">
               <p className="text-sm font-bold text-themel4">Connect with us</p>
                <i className="text-sm font-bold text-themel4">Facebook</i>
                <p><span className="text-sm font-bold text-themel4">twitter</span></p>
                <p className="text-sm font-bold text-themel4">instagram</p>
           </div>
        </div>
        <div className="w-full flex items-center justify-center gap-3 my-8">
                <p className="text-sm font-medium text-white">© 2022 gbay.in</p> <p className="text-xs text-white font-thin">Terms and conditions</p>
          </div>
    </div>
  )
}
