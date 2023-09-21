import React, { useState } from "react";
import { useContext } from "react";
import { ContractContext } from "../App";
import toast from "react-hot-toast";


const BloodTransaction = () => {
  const { contract } = useContext(ContractContext);

  const [formData, setFormData] = useState({
    aadhar: "",
    dnrOrRcvr: "0",
    from: "",
    to: "",
  });

  const bloodTransaction = async () => {
    try {
      const { aadhar, dnrOrRcvr, from, to } = formData;

      const aadharAsNmber = parseInt(aadhar, 10);

      const BloodTransaction = await contract.bloodTransaction(
        aadharAsNmber,
        dnrOrRcvr,
        from,
        to
      );

      await BloodTransaction.wait();
      toast.success("Blood Transaction Completed ")
      console.log("this is BloodTransacrtion", BloodTransaction);
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bloodTransaction();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="p-1  w-[85%] flex flex-col items-center  sm:w-[100%]">
      <h2 className="mb-4 sm:text-3xl text-2xl font-bold text-gradient">
        Register new Patient
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex  justify-center flex-col items-center"
      >
        <input
          type="text"
          required
          onChange={handleChange}
          name="aadhar"
          value={formData.aadhar}
          placeholder="Aadhar"
          className="text-black p-2 m-2  rounded-md border-none outline-none"
        />

        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleChange}
            name="dnrOrRcvr"
            value={"0"}
            checked={formData.dnrOrRcvr === "0"}
          />
          <label htmlFor="donor" className="text-xl ml-2 font-bold ">
            Donor
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleChange}
            name="dnrOrRcvr"
            value={"1"}
            checked={formData.dnrOrRcvr === "1"}
          />
          <label htmlFor="receiver" className="text-xl ml-2 font-bold ">
          Receiver
          </label>
        </div>
        <input
          placeholder="From address"
          className="text-black p-2 m-2 rounded-md border-none outline-none"
          onChange={handleChange}
          name="from"
          value={formData.from}
          type="text"
        />
        <input
          placeholder="To address"
          className="text-black p-2 m-2 rounded-md border-none outline-none"
          onChange={handleChange}
          name="to"
          value={formData.to}
          type="text"
        />
          <button
            className="bg-indigo-500 p-1 m-2 rounded-sm"
            type="submit"
          >
            Transact
          </button>
      </form>
    </div>
  );
};

export default BloodTransaction;
