import React from "react";
type errorProps = {
  error: string;
};

const ErrorComponent = (error: errorProps) => {
  return <div>{error.error}</div>;
};

export default ErrorComponent;
