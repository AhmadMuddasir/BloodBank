import React, { useContext, useState } from "react";
import { ContractContext } from "../App";
import toast from "react-hot-toast";

const NewPatient = () => {
  const { contract } = useContext(ContractContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    homeAddress: "",
    aadhar: "",
  });

  const RegisterNewPatient = async () => {
    const { name, age, bloodGroup, contact, homeAddress, aadhar } = formData;

    const ageAsNumber = parseInt(age, 10);
    const contactAsNumber = parseInt(contact, 10);
    const aadharasNmbr = parseInt(aadhar, 10);




    try {

      const newPatients = await contract.newPatient(
    name,
    ageAsNumber,
    bloodGroup,
    contactAsNumber,
    homeAddress,
    aadharasNmbr
        );

        await newPatients.wait();
        toast.success("New patient registered successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterNewPatient();
  };


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const data = [
    {
      id: "1",
      name: "name",
      value: formData.name,
      text: "Name",
    },
    {
      id: "2",
      name: "age",
      value: formData.age,
      text: "Age",
    },
    {
      id: "3",
      name: "bloodGroup",
      value: formData.bloodGroup,
      text: "Blood Group",
    },
    {
      id: "4",
      name: "contact",
      value: formData.contact,
      text: "Contact",
    },
    {
      id: "5",
      name: "homeAddress",
      value: formData.homeAddress,
      text: "Home Address",
    },
    {
      id: "6",
      name: "aadhar",
      value: formData.aadhar,
      text: "Aadhar",
    },
  ];

  return (
    <>
      <div className="p-1">
        <h2 className="mb-4 text-3xl  font-bold text-gradient">
          Register new Patient
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex  justify-center flex-wrap items-center"
        >
          {/* Input fields with name attributes */}
          {data.map((data, index) => (
            <div key={index} className="flex flex-col items-start mb-3">

              <p className="ml-2 text-white font-mono  text-lg">{data.text}</p>
              <input
                className="sm:p-2 sm:m-2 m-1 p-1 text-black rounded-md border-none outline-none"
                type="text"
                name={data.name}
                value={data.value}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          {/* Repeat similar input fields for other form fields */}

          <button
            type="submit"
            className="button_gradient text-black font-bold p-1 m-2 rounded-sm"
          >
            Register New Patient
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPatient;
