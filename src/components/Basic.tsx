import React from "react";
import { useFactoryContract } from "../contexts/contractEffects";
import { BetContext } from "../contexts/betProvider";
import { Grid } from "./Grid";

export const Basic: React.FC = () => {
  const { createBet, getBets, addToBet } = useFactoryContract();
  const betContext = React.useContext(BetContext);
  const bets = betContext.state.bets && Object.values(betContext.state.bets);

  React.useEffect(() => {
    getBets();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "65px" }}>
        <button
          type='submit'
          onClick={() => {
            createBet();
          }}
        >
          Create Escrow
        </button>
      </div>
      <Grid collection={bets} addToBet={addToBet} />
    </div>
  );
};
