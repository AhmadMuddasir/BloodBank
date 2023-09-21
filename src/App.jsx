import { createContext, useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { Toaster } from 'react-hot-toast';
import { contractABI, contractAddress } from "./context/conntext";
import AllBloodTransaction from "./components/AllBloodTransaction";
import Footer from "./components/Footer";


export const ContractContext =  createContext();

function App() {
  

  const [contract, setContract] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not Connected");
  

  useEffect(() => {
    const template = async () => {

      try {
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account[0]);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const Mycontract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(Mycontract);
        console.log(Mycontract);
        
      } catch (error) {}
    };
    template();
  }, []);

  return (
    <>
      <ContractContext.Provider value={{ contract }}>
          <Navbar />
          <Header account={account} />
          <Section />
          <AllBloodTransaction/>
          <Footer/>
          <Toaster />
      </ContractContext.Provider>
    </>
  );
}

export default App;
