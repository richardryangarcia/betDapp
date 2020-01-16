import React from "react";
import { useFactoryContract } from "../../contexts/contractEffects";
import { useWeb3Context } from "web3-react";

export const App: React.FC<any> = ({ children }) => {
  const { getUserDetails } = useFactoryContract();

  React.useEffect(() => {
    getUserDetails();
  }, []);
  return <div>{children}</div>;
};
