import React from "react";
import { Toast, Spinner } from "react-bootstrap";
import { AlertContext } from "../contexts/alertProvider";

export const AwaitTxAlert = () => {
  const { state } = React.useContext(AlertContext);

  return (
    <div className='alert'>
      {state.awaitingTxs.length > 0 && (
        <Toast>
          Awaiting transaction, this may take a minute{" "}
          <Spinner animation='border' />
        </Toast>
      )}
    </div>
  );
};
