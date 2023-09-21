export const contractAddress = "0xDE6A345FdAeF72f8fd8ab7A04CB1483b1E797De7"


export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aadhar",
				"type": "uint256"
			},
			{
				"internalType": "enum BloodBank.PatientType",
				"name": "_type",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "bloodTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contact",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_homeAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_aadhar",
				"type": "uint256"
			}
		],
		"name": "newPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "Successfull",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "bloodGroup",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "contact",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "homeAddress",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "enum BloodBank.PatientType",
								"name": "patientType",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "time",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "from",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							}
						],
						"internalType": "struct BloodBank.BloodTransaction[]",
						"name": "bT",
						"type": "tuple[]"
					}
				],
				"internalType": "struct BloodBank.Patient[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aadhar",
				"type": "uint256"
			}
		],
		"name": "getParticularBloodTransaction",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum BloodBank.PatientType",
						"name": "patientType",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					}
				],
				"internalType": "struct BloodBank.BloodTransaction[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aadhar",
				"type": "uint256"
			}
		],
		"name": "getPatientRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "bloodGroup",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "contact",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "homeAddress",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "enum BloodBank.PatientType",
								"name": "patientType",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "time",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "from",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							}
						],
						"internalType": "struct BloodBank.BloodTransaction[]",
						"name": "bT",
						"type": "tuple[]"
					}
				],
				"internalType": "struct BloodBank.Patient",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
