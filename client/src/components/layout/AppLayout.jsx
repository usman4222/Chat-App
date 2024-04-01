import React from 'react'


const AppLayout = () => {
  return (
    <div>
      <div className="lg:col-span-7 relative hidden lg:block">
          <div className="bg-[url('/src/assets/chat.png')] bg-cover h-[100vh] ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="flex justify-center items-center h-[100vh] text-white">
              <div className="relative">
                <h3 className="text-center pb-2 font-bold text-3xl text-white">
                  New Here?
                </h3>
                {/* <span className="text-center font-semibold text-base text-white">
                  Figma ipsum component variant main layer.
                </span> */}
                <div className="flex justify-center pt-10" onClick={navigator}>
                  {/* <button className="bg-[#FFB100] px-14 py-3 rounded-xl text-white font-semibold cursor-pointer">
                    Sign Up
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AppLayout
