import React from "react";
import { ErrorBoundary } from "../index";

const Loader = () => (
  <ErrorBoundary>
    {/* <div className="loader"> */}
    {/* <BarChartOutlined className="loader" /> */}
    <div
      style={{
        textAlign: "center",
        borderRadius: 20,
      }}
    >
      <p >
        Loading...
      </p>
    </div>
    {/* </div> */}
    {/* </div> */}
  </ErrorBoundary>
);

export default Loader;
