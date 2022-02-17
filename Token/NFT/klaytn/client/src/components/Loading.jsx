import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ isShow = false }) => {
  return isShow ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
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
