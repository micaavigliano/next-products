import Image from "next/image";
import React from "react";
import img from "../public/loading.jpg";
import colors from "../utils/colors"

const Loading = () => {
  return (
    <div
      style={{
        backdropFilter: 'blur(5px)',
        height: "100vh",
        width: "100vh",
        position: "relative",
      }}
    >
      <div style={{
        position: "absolute",
        top: "15%",
        left: "15%",
        textAlign: "center"
      }}>

        <Image src={img} alt="" />
        <p
          aria-live="polite"
          role="status"
        >
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loading;
