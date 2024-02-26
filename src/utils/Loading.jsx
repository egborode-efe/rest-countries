import React from "react";
import {  SyncLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loading = ({isloading}) => {
  return (
    <div className="mt-5">
      <SyncLoader
        color={"red"}
        loading={isloading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
