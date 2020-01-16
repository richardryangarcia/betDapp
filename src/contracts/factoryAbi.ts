export default [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256"
      }
    ],
    name: "getBets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "betAddress",
        type: "address"
      }
    ],
    name: "addToEscrow",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "admins",
    outputs: [
      {
        internalType: "string",
        name: "profileImageHash",
        type: "string"
      },
      {
        internalType: "string",
        name: "firstName",
        type: "string"
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "betCount",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "fName",
        type: "string"
      },
      {
        internalType: "string",
        name: "lName",
        type: "string"
      }
    ],
    name: "updateInfo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256"
      }
    ],
    name: "getLatestBets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "betAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "createEscrow",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getUserInfo",
    outputs: [
      {
        internalType: "string",
        name: "imageHash",
        type: "string"
      },
      {
        internalType: "string",
        name: "firstName",
        type: "string"
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "bets",
    outputs: [
      {
        internalType: "contract CustomEscrow",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "betCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "escrow",
    outputs: [
      {
        internalType: "contract CustomEscrow",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "imageHash",
        type: "string"
      }
    ],
    name: "updateImage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "EscrowCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "UserUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "NewBalance",
    type: "event"
  }
];
