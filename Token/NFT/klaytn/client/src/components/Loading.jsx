import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

const Loading = () => {
  const isShowLoading = useSelector((s) => s.loading);
  return isShowLoading ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 2,
        background: "white",
        opacity: 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading
        color="white"
        type="spin"
        style={{
          width: 50,
          height: 50,
          textAlign: "center",
        }}
      />
    </div>
  ) : (
    <></>
  );
};
export default Loading;
