const { ethers } = require("hardhat");
const { expect } = require("chai");


describe("BloodBank", function () {
  let owner;
  let user1;
  let user2;
  let bloodBank;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    const BloodBank = await ethers.getContractFactory("BloodBank");
    bloodBank = await BloodBank.deploy();
  });

  it("Should register a new patient", async function () {
    const aadhar = 1234567890;
    const name = "John Doe";
    const age = 30;
    const bloodGroup = "O+";
    const contact = 1234567890;
    const homeAddress = "123 Main St";

    await bloodBank
      .connect(owner)
      .newPatient(name, age, bloodGroup, contact, homeAddress, aadhar);

    const patientRecord = await bloodBank.getPatientRecord(aadhar);

    expect(patientRecord.name).to.equal(name);
    expect(patientRecord.age).to.equal(age);
    expect(patientRecord.bloodGroup).to.equal(bloodGroup);
    expect(patientRecord.contact).to.equal(contact);
    expect(patientRecord.homeAddress).to.equal(homeAddress);
  });

  it("Should perform a blood transaction", async function () {
    const aadhar = 1234567890;
    const type = 0; // 0 for Donor, 1 for Receiver
    const from = user1.address;
    const to = user2.address;

    await bloodBank
      .connect(owner)
      .newPatient("John Doe", 30, "O+", 1234567890, "123 Main St", aadhar);

    await bloodBank
      .connect(owner)
      .bloodTransaction(aadhar, type, from, to);

    const bloodTransactions = await bloodBank.getParticularBloodTransaction(aadhar);

    expect(bloodTransactions.length).to.equal(1);
    expect(bloodTransactions[0].patientType).to.equal(type);
    expect(bloodTransactions[0].from).to.equal(from);
    expect(bloodTransactions[0].to).to.equal(to);
  });
});
