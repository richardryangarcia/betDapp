import React from "react";
import { useWeb3Context } from "web3-react";
import { LoadingSpinner } from "../Loader";

export const Web3Initializer: React.FC<any> = ({ children }) => {
  const context = useWeb3Context();
  React.useEffect(() => {
    context.setConnector("Fortmatic");
  }, [context]);

  return (
    <div>
      {!context.library && <LoadingSpinner />}
      {context.library && children}
    </div>
  );
};
