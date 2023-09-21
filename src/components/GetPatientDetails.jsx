import React, { useContext, useState } from 'react'
import { ContractContext, } from '../App'
import toast from 'react-hot-toast';



const GetPatientDetails = () => {

    const {contract} = useContext(ContractContext);

    const [aadhar,setAadhar] = useState("");
    const [patienrRecord,setPatientRecord] = useState([]);

    const [data,setdata] = useState(false)

    const getPatientRecords = async()=>{
        try {
        const  aadharAsNmber = parseInt(aadhar,10);
          const Mycontract = await contract.getPatientRecord(aadharAsNmber);
          setPatientRecord(Mycontract)
          setdata(true)

        } catch (error) {
          console.log(error);
          toast.error("either wrong aadhar or person not regitered")
        }
    }

    const handleChange = (e)=>{
      setAadhar(e.target.value)
    }
    console.log(patienrRecord)

  return (
    <>

    <div className="p-2">
    <h2 className="mb-4 text-3xl  font-bold text-gradient">
    Get Patient Records
        </h2>
        
        <div className="flex  justify-center flex-wrap items-center">
          <input 
          type="text"
          onChange={handleChange}
          value={aadhar}
          placeholder="Aadhar Number"
          className='text-black outline-none border-none p-2 m-2 rounded-sm w-full'
          required
          />
        </div>
        <button 
        className='button_gradient text-black font-mono w-full p-1 mt-4'
        onClick={getPatientRecords}>Patient Record</button>
        <ul className="flex flex-col items-center justify-around w-[100%]">
          {
            data ? (
              <>
              <div className='sm:text-3xl text-1xl font-bold flex flex-col justify-center items-start'>
              <p className=' my-2 p-1'>name: {patienrRecord.name}</p>
              <p className=' my-2 p-1'>aadhar: { patienrRecord.aadhar.toString()}</p>
              <p className=' my-2 p-1'>age: {patienrRecord.age.toString()}</p>
              <p className=' my-2 p-1'>contact: { patienrRecord.contact.toString()}</p>
              <p className=' my-2 p-1'>Home Address: {patienrRecord.homeAddress}</p>
              <p className=' my-2 p-1'>bloodGroup: {patienrRecord.bloodGroup}</p>
              </div>
              </>
            ) : ("")
            }


      </ul>
    </div>

    </>
  )
}

export default GetPatientDetails