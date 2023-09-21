import React, { useContext, useState } from "react";
import { ContractContext } from "../App";
import toast from "react-hot-toast";

const GetBloodTransaction = () => {
  const { contract } = useContext(ContractContext);

  const [aadhar, setAadhar] = useState("");
  const [BloodRecord, setbloodRecord] = useState([]);
  const [data, setdata] = useState(false);

  const getBloodTransaction = async () => {
    try {
      const aadharAsNmbr = parseInt(aadhar, 10);
      const transaction = await contract.getParticularBloodTransaction(aadharAsNmbr);
      setbloodRecord(transaction);
      setdata(true);
      console.log(transaction);
    } catch (error) {
      console.log(error);
      toast.error("either wrong aadhar or person not regitered")
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAadhar(value);
  };



  return (
    <>
      <div className="p-2 rounded-sm w-[85%]  sm:w-[100%]">

        <h2 className="mb-4 text-3xl  font-bold text-gradient">
          Get Blood Transaction Records
        </h2>
        <div className="flex ml-2 justify-center flex-wrap items-center">
          <input
          className="text-black outline-none border-none p-2 m-2 rounded-sm w-full"
            type="text"
            onChange={handleChange}
            value={aadhar}
            required
            placeholder="AADHAR NUMBER"
          />
          <button
            className="button_gradient text-black font-mono  p-1 mt-4"
            onClick={getBloodTransaction}
          >Get Blood Transctions</button>

            <ul className="flex flex-col items-center justify-around ">
              {data ? (
                <div className="sm:text-sm text-[13px]  font-bold flex flex-wrap justify-center items-start">
                    {BloodRecord.map((record,index)=>(
                      <div key={index} className=" sm:w-[]">
                        <p className="bg-slate-700 m-2 p-1 ">Record No.{index+1}</p>
                        <p className="my-2 p-1">Patient type: {record.patientType === 0 ? (
                          <span>Donor</span>
                        ) : (
                          <span>Receiver</span>
                        ) }    </p>
                        <p className="my-1 p-1">Time: {new Date(record.time * 1000).toLocaleString()}</p>
                        <p className="my-1 p-1">From person: {record.from}</p>
                        <p className="my-1 p-1">to Person: {record.to}</p>
                      </div>
                    )
                    
                    )}
                </div>
              ) : (
                ""
              )}
            </ul>
        </div>
      </div>
    </>
  );
};

export default GetBloodTransaction;
