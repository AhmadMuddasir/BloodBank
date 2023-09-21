import React, { useContext, useState } from 'react';
import { bloodtransaction2, getBloodTransaction, getPatientDetails, newPatient } from '../assets';
import GetBloodTransaction from './GetBloodTransaction';
import GetPatientDetails from './GetPatientDetails';
import NewPatient from './NewPatient';
import BloodTransaction from './BloodTransaction';
import { ContractContext } from '../App';

const sections = [
  {
    title: 'New Patient',
    image: newPatient,
    buttonText: 'Register Patient',
    component: <NewPatient
    
    />,
  },
  {
    title: 'Blood Transaction',
    image: bloodtransaction2,
    buttonText: 'Do blood Trnx',
    component: <BloodTransaction />,
  },
  {
    title: 'Get Blood Transaction',
    image: getBloodTransaction,
    buttonText: 'BloodTransaction Data',
    component: <GetBloodTransaction />,
  },
  {
    title: 'Get Patient Details',
    image: getPatientDetails,
    buttonText: 'PatientDetails',
    component: <GetPatientDetails />,
  },
];

const Section = () => {

  const {contract} = useContext(ContractContext);


  const [activeComponent, setActiveComponent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (component) => {
    setActiveComponent(component);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setActiveComponent(null);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
    
    <div id='features' className='flex items-center justify-center w-[100%] mt-6'>
      <div className='box2 flex items-center flex-wrap justify-center sm:m-4 sm:p-4'>
        {sections.map((section, index) => (
          <div key={index} className='flex flex-col items-center justify-center m-4'>
            <div className='bg-gray-600 box flex flex-col items-center justify-center rounded-md px-4'>
              <img
                className='mb-4 bg-slate-500 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] m-4 shadow-md shadow-gray-400 rounded-[50%] border-[3px]'
                src={section.image}
                alt={section.title}
              />
              <button
                className='button_gradient text-gray-700 font-extrabold text-sm sm:text-xl sm:w-[25rem] w-[18rem] rounded-md m-2 p-2'
                onClick={() => handleClick(section.component)}
              >
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display the active component */}
      {isModalOpen && (
        <>
        
        <div className='sidebar flex justify-center absolute items-center  w-full'>
        <div className='flex flex-col bg-slate-900  items-start md:w-[40%] sm:w-[52%]  w-[85%] rounded-lg m-4 p-4  '>
            <button className='m-2 p-2 bg-slate-500 rounded-sm' onClick={closeModal}>
              Close
            </button>
            <div>
            {activeComponent}
  
        </div>
        </div>
        </div>
        </>
      )}
    </div>
    </>
  );
};

export default Section;
// In this code:

// We introduced a new state variable isModalOpen to control whether the modal is displayed or not.
// When a button is clicked (handleClick), we set isModalOpen to true to open the modal and display the selected component.
// We also added a close button in the modal (modal-close) that sets isModalOpen to false when clicked, closing the modal.
// Please ensure you have appropriate CSS styling for your modal to make it visually appealing and functional.





