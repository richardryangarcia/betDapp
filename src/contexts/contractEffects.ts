import React from "react";
import { ethers } from "ethers";
import { updateContract, addContract } from "./contractActions";
import { AlertContext } from "../contexts/alertProvider";
import { awaitTxAlert, removeTxAlert } from "../contexts/alertActions";
import { ContractsContext } from "../contexts/contractProvider";
import { updateUser } from "../contexts/userActions";
import { FACTORY_ADDRESS, factoryAbi } from "../contracts/index";
import { UserContext } from "./userProvider";
import { useWeb3Context } from "web3-react";
import customEscrowAbi from "../contracts/customEscrowAbi";
import { BetContext } from "./betProvider";
import { getBetsSuccess } from "./betActions";

export const useFactoryContract = () => {
  const alertContext = React.useContext(AlertContext);
  const userContext = React.useContext(UserContext);
  const contractContext = React.useContext(ContractsContext);
  const betContext = React.useContext(BetContext);
  const web3Context = useWeb3Context();
  const contract = contractContext.state[FACTORY_ADDRESS];
  const signer = web3Context.library.getSigner();

  const newBetContract = (address: string) => {
    return new ethers.Contract(address, customEscrowAbi, signer);
  };

  const addContractToContext = (instance: any) => {
    contractContext.dispatch(
      addContract({
        name: instance.address,
        contract: instance
      })
    );
  };

  const initializeFactory = async () => {
    const newFactoryContract = new ethers.Contract(
      FACTORY_ADDRESS,
      factoryAbi,
      signer
    );
    addContractToContext(newFactoryContract);
  };

  const getUserDetails = async () => {
    try {
      const userDetails = await contract.getUserInfo();
      let userBalances = await web3Context.connector.fortmatic.user.getBalances();
      userContext.dispatch(
        updateUser({
          ...userDetails,
          balance: userBalances[0].crypto_amount_display,
          account: web3Context.account
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const updateImage = async (ipfsHash: string) => {
    try {
      const tx = await contract.updateImage(ipfsHash);
      alertContext.dispatch(awaitTxAlert(tx));
      await tx.wait();
      alertContext.dispatch(removeTxAlert(tx));
      getUserDetails();
    } catch (e) {
      console.log(e);
    }
  };

  const asyncForEach = async (array: string[]) => {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      const address = array[i];
      const instance = newBetContract(address);
      addContractToContext(instance);
      const details = await instance.escrowDetails();
      obj = {
        ...obj,
        [`${address}`]: {
          address: address,
          balance: details.balance.toString(),
          primary: details.primary,
          beneficiary: details.beneficiary,
          sport: details.sport,
          gameType: details.gameType,
          contributorCount: details.contributorCount.toString()
        }
      };
    }
    return obj;
  };

  const createBet = async () => {
    try {
      let tx = await contract.createEscrow();
      alertContext.dispatch(awaitTxAlert(tx));
      let receipt = await tx.wait(2);
      let event = receipt.events.pop();
      let newContractAddress = event.args[0];
      alertContext.dispatch(removeTxAlert(tx));

      let obj = await asyncForEach([newContractAddress]);
      betContext.dispatch(getBetsSuccess(obj));
    } catch (e) {
      console.log(e);
    }
  };

  const getBets = async () => {
    try {
      const bets = await contract.getBets(25);
      let obj = await asyncForEach(bets);
      betContext.dispatch(getBetsSuccess(obj));
    } catch (e) {}
  };

  const addToBet = async (contractAddress: string, amount: string) => {
    var wei = ethers.utils.parseEther(amount);

    try {
      let tx = await contract.addToEscrow(contractAddress, {
        gasLimit: 75000,
        value: wei
      });
      alertContext.dispatch(awaitTxAlert(tx));
      let receipt = await tx.wait(2);
      let event = receipt.events.pop();
      let newBalance = event.args[0];
      alertContext.dispatch(removeTxAlert(tx));

      const newBetDetails = {
        ...betContext.state.bets[contractAddress],
        balance: newBalance.toString()
      };
      betContext.dispatch(
        getBetsSuccess({ [`${contractAddress}`]: newBetDetails })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return {
    initializeFactory,
    createBet,
    getUserDetails,
    updateImage,
    getBets,
    addToBet
  };
};

export const updateCount = async (contract: any, dispatch: any) => {
  try {
    const count = await contract.betCount();
    console.log(count, contract.address);
    dispatch(
      updateContract({
        name: contract.address,
        data: { count: count.toString() }
      })
    );
  } catch (e) {
    // dispatch(readFailure(e));
  }
};
