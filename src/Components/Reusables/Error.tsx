import React from "react";

type ErrorProps = {
  error: string;
};

const Error = (error: ErrorProps) => {
  return (
    <div>
      <h2>{error.error}</h2>
    </div>
  );
};

export default Error;
