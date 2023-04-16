import React from 'react'
import Model from '../components/Model'
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <>
    <div className='grid w-full sm:grid-cols-1 mt-10 lg:mt-10  lg:grid-cols-2  h-full justify-center overflow-y-scroll items-center font-poppins flex-wrap'>

        <div ><Model/></div>
        <div className='text-5xl lg:text-7xl  h-[90vh]  flex flex-col justify-center items-center font-bold text-center    leading-relaxed'><p className='flex flex-row justify-center items-center gap-5'> 
          <img
              src={Logo}
              className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]"
              alt="logo"
            />
            InSynk</p><p className=' mt-10 font-normal'>Where <span className='text-[#69CFC3]'>inspiration</span><br></br>  meets  <span className="text-[#6E64EA]">education</span></p></div>
    </div>
    </>
  )
}

export default Home