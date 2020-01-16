import React from "react";
import { useWeb3Context } from "web3-react";
import { ContractsContext } from "../contexts/contractProvider";
import { addContract } from "../contexts/contractActions";
import { ethers } from "ethers";

export const LoadContract = (props: any) => {
  const { name, address, abi } = props;
  const context = useWeb3Context();
  const signer = context.library.getSigner();
  const { dispatch } = React.useContext(ContractsContext);

  type Contract = {
    name: string;
    contract: any;
  };
  const createEthersContract = (): Contract => {
    return {
      name: name,
      contract: new ethers.Contract(address, abi, signer)
    };
  };

  const addContractToContext = (ethersContract: Contract) => {
    if (dispatch) {
      dispatch(addContract(ethersContract));
    }
  };

  const ethersContract = createEthersContract();
  addContractToContext(ethersContract);
};
