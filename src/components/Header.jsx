import React from 'react'
import { header } from '../assets'

const Header = ({account}) => {
  return (
    <>
    <div id='home' className='flex flex-col  items-center justify-center w-[100%] mx-2 mb-2'>
      <div className='flex justify-start items-start w-full'>
    <h2 className=" bg-slate-500 rounded-md p-2">
                Account: {account.length > 13 ? `${account.slice(0, 13)}...` : account}
    </h2>

      </div>
      <div className='section_box  flex flex-col sm:flex-row items-center  p-4 m-4 justify-center' >

        <div className="sm:w-[50%]   flex justify-center items-start flex-col m-10">
          <h2 className=' sm:text-6xl text-4xl  font-bold mb-4'>
          Welcome to <span className='text-gradient  font-bold'>DECENTERALIZE BLOOD BANK </span> App
          </h2>
          <p className='text-gray-100 font-mono text-sm m-2 mt-6'>
          NOTE:as this website should be only manage by the Hospitals but you are a user so i have given you access to all the features of the WEB3 but in real life it will be manage by hospitals
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={header} alt="img" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Header