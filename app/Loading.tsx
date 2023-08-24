import Image from "next/image";
import React from "react";
import img from "../public/loading.jpg";

const Loading = () => {
  return (
    <div
      style={{
        background: "white",
        height: "100vh",
        width: "100vh",
        position: "relative",
      }}
      aria-live="polite"
      role="status"
    >
      <Image src={img} alt="" />
      <p
        style={{
          backgroundColor: "orange",
          position: "absolute",
          top: "50vh",
          left: "50vh",
        }}
      >
        loading
      </p>
    </div>
  );
};

export default Loading;
