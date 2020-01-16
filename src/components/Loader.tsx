import React from "react";
import { Spinner } from "react-bootstrap";

export const LoadingSpinner: React.FC = () => {
  return (
    <div style={{ position: "fixed", top: 0, bottom: 0, right: 0, left: 0 }}>
      <Spinner
        animation='border'
        role='status'
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          top: "50%",
          left: "50%"
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};
