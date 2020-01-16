import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./Router";
import * as serviceWorker from "./serviceWorker";
import Web3Provider from "web3-react";
import { Web3Initializer } from "./components/SetupApplication/Web3Initializer";
import { connectors } from "./configs/connectors";
import { ContractsProvider } from "./contexts/contractProvider";
import { UserProvider } from "./contexts/userProvider";
import { BetsProvider } from "./contexts/betProvider";
import { AlertProvider } from "./contexts/alertProvider";
import { LoadContracts } from "./components/SetupApplication/LoadContracts";
import "./styles/main.scss";

ReactDOM.render(
  <Web3Provider connectors={connectors} libraryName='ethers.js'>
    <Web3Initializer>
      <ContractsProvider>
        <LoadContracts>
          <UserProvider>
            <BetsProvider>
              <AlertProvider>
                <AppRouter />
              </AlertProvider>
            </BetsProvider>
          </UserProvider>
        </LoadContracts>
      </ContractsProvider>
    </Web3Initializer>
  </Web3Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
