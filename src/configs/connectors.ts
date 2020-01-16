import { Connectors } from "web3-react";
import FortmaticApi from "fortmatic";

const defaultNetwork = 4;
const supportedNetworkURLs = {
  4: "rinkeby.infura.io/v3/4faf52f5e97a401ea7a59c628d8fa02e"
};

const { InjectedConnector, FortmaticConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [4] });

const Fortmatic = new FortmaticConnector({
  api: FortmaticApi,
  apiKey: "pk_test_13A1FD4E48D9438E",
  logoutOnDeactivation: false
});

export const connectors = { Fortmatic, MetaMask };
