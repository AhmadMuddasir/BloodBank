import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { ContractContext } from "../App";

const AllBloodTransaction = () => {
  const { contract } = useContext(ContractContext);
  const [Records,setRecords] = useState([]);

  useEffect(()=>{
    const getAllRecords = async()=>{
      try {
        const records = await contract.getAllRecord();
        setRecords(records);
      } catch (error) {
        
      }
      
    }
    contract && getAllRecords();
  },[contract]);

  return (
<div id='transaction' className="overflow-x-auto mt-4">
  <h2 className='flex items-center sm:justify-center sm:text-4xl text-2xl font-bold my-4 text-gradient '>Get All transaction data -</h2>
  <table className="min-w-full mt-8 bg-slate-700">
    <thead>
      <tr>
        <th className="px-6 py-3 text-left"> # </th>
        <th className="px-6 py-3 text-left"> Name </th>
        <th className="px-6 py-3 text-left"> Age </th>
        <th className="px-6 py-3 text-left"> Blood Group </th>
        <th className="px-6 py-3 text-left"> Contact </th>
        <th className="px-6 py-3 text-left"> Home Address </th>
        <th className="px-6 py-3 text-left"> Aadhar </th>
      </tr>
    </thead>
    <tbody>
      {Records.map((record, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.age.toString()}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.bloodGroup}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.contact.toString()}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.homeAddress}</td>
          <td className="px-6 py-4 whitespace-nowrap">{record.aadhar.toString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default AllBloodTransaction