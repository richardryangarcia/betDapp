import React from "react";
import { FACTORY_ADDRESS } from "../../contracts";
import { LoadingSpinner } from "../Loader";
import { ContractsContext } from "../../contexts/contractProvider";
import { useFactoryContract } from "../../contexts/contractEffects";

export const LoadContracts: React.FC<any> = ({ children }) => {
  const { initializeFactory } = useFactoryContract();
  const { state } = React.useContext(ContractsContext);
  React.useEffect(() => {
    initializeFactory();
  }, []);

  const appReady = FACTORY_ADDRESS in state ? true : false;

  return (
    <div>
      {!appReady && <LoadingSpinner />}
      {appReady && children}
    </div>
  );
};
