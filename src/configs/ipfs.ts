import * as ipfsClient from "ipfs-http-client";

type ipfsClientType = {
  host: string;
  port: string;
  protocol: string;
};

const config: ipfsClientType = {
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https"
};
const ipfs = ipfsClient(config);

export default ipfs;
